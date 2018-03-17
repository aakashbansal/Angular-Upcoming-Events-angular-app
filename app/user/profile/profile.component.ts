import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from '../../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile/profile.component.html',
  styleUrls: [
    'app/user/profile/profile.component.css'
  ]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
    Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required,
    Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {

      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Successfully Updated');
        });

    }
  }

  logOut() {
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }


}
