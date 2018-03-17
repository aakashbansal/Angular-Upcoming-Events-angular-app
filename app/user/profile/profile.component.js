"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var auth_service_1 = require("../shared/auth.service");
var router_1 = require("@angular/router");
var forms_3 = require("@angular/forms");
var toastr_service_1 = require("../../common/toastr.service");
var ProfileComponent = (function () {
    function ProfileComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new forms_2.FormControl(this.authService.currentUser.firstName, [forms_3.Validators.required,
            forms_3.Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new forms_2.FormControl(this.authService.currentUser.lastName, [forms_3.Validators.required,
            forms_3.Validators.pattern('[a-zA-Z].*')]);
        this.profileForm = new forms_1.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent.prototype.saveProfile = function (formValues) {
        var _this = this;
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
                .subscribe(function () {
                _this.toastr.success('Profile Successfully Updated');
            });
        }
    };
    ProfileComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logOut().subscribe(function () {
            _this.router.navigate(['/user/login']);
        });
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/user/profile/profile.component.html',
        styleUrls: [
            'app/user/profile/profile.component.css'
        ]
    }),
    __param(2, core_1.Inject(toastr_service_1.TOASTR_TOKEN)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router, Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map