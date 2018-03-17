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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var restricted_words_validator_1 = require("../../shared/restricted-words.validator");
var CreateSessionComponent = (function () {
    function CreateSessionComponent(router) {
        this.router = router;
        this.saveNewSession = new core_1.EventEmitter();
        this.cancelNewSession = new core_1.EventEmitter();
        this.restrictedWordsList = ['foo', 'bar', 'this', 'that', 'good', 'bad'];
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        this.abstract = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400), restricted_words_validator_1.restrictedWords(this.restrictedWordsList)]);
        this.newSessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValue) {
        var session = {
            id: undefined,
            name: formValue.name,
            duration: +formValue.duration,
            level: formValue.level,
            presenter: formValue.presenter,
            abstract: formValue.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelNewSession.emit();
    };
    return CreateSessionComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CreateSessionComponent.prototype, "saveNewSession", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CreateSessionComponent.prototype, "cancelNewSession", void 0);
CreateSessionComponent = __decorate([
    core_1.Component({
        selector: 'create-session',
        templateUrl: 'app/events/session/create-session/create-session.component.html',
        styleUrls: [
            'app/events/session/create-session/create-session.component.css'
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CreateSessionComponent);
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map