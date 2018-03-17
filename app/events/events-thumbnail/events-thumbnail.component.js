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
var EventsThumbnail = (function () {
    function EventsThumbnail() {
    }
    EventsThumbnail.prototype.getEarlyStartStyle = function () {
        var isEarlyStart = this.event && this.event.time === '8:00 am';
        if (isEarlyStart) {
            return { color: '#003300', 'font-weight': 'bold' };
        }
        return {};
    };
    return EventsThumbnail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventsThumbnail.prototype, "event", void 0);
EventsThumbnail = __decorate([
    core_1.Component({
        selector: 'events-thumbnail',
        templateUrl: 'app/events/events-thumbnail/events-thumbnail.component.html',
        styleUrls: [
            'app/events/events-thumbnail/events-thumbnail.component.css'
        ]
    }),
    __metadata("design:paramtypes", [])
], EventsThumbnail);
exports.EventsThumbnail = EventsThumbnail;
//# sourceMappingURL=events-thumbnail.component.js.map