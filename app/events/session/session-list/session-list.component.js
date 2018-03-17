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
var voter_service_1 = require("../../../common/upvote/voter.service");
var auth_service_1 = require("../../../user/shared/auth.service");
var SessionListComponent = (function () {
    function SessionListComponent(voterService, authService) {
        this.voterService = voterService;
        this.authService = authService;
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
                this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    };
    SessionListComponent.prototype.filterSessions = function (filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0); // we want a brand new array, not a pointer to existing one
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    };
    return SessionListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SessionListComponent.prototype, "sessions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SessionListComponent.prototype, "filterBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SessionListComponent.prototype, "sortBy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SessionListComponent.prototype, "eventId", void 0);
SessionListComponent = __decorate([
    core_1.Component({
        selector: 'session-list',
        templateUrl: 'app/events/session/session-list/session-list.component.html'
    }),
    __metadata("design:paramtypes", [voter_service_1.VoterService,
        auth_service_1.AuthService])
], SessionListComponent);
exports.SessionListComponent = SessionListComponent;
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name) {
        return 1;
    }
    if (s1.name === s2.name) {
        return 0;
    }
    return -1;
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}
//# sourceMappingURL=session-list.component.js.map