import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/user/login/login.component.html',
    styles: [`
    em {
        float:right;
        padding-left:10px;
        color:#E05C65;
       }
    `]
})
export class LoginComponent {

    loginInvalid = false;

    constructor(private authService: AuthService,
        private router: Router) {

    }
    login(formValue) {
        this.authService.loginUser(formValue.userName, formValue.password)
            .subscribe((resp) => {
                if (!resp) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            });
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
