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
var router_1 = require("@angular/router");
var event_service_1 = require("../shared/event.service");
var EventsCreateComponent = (function () {
    function EventsCreateComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    EventsCreateComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    EventsCreateComponent.prototype.saveEvent = function (formValues) {
        var _this = this;
        this.eventService.saveEvent(formValues).subscribe(function (event) {
            _this.isDirty = false;
            _this.router.navigate(['/events']);
        });
    };
    return EventsCreateComponent;
}());
EventsCreateComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/events/events-create/events-create.component.html',
        styleUrls: [
            'app/events/events-create/events-create.component.css'
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        event_service_1.EventService])
], EventsCreateComponent);
exports.EventsCreateComponent = EventsCreateComponent;
//# sourceMappingURL=events-create.component.js.map