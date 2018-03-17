import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';
import { VoterService } from '../../../common/upvote/voter.service';
import { AuthService } from '../../../user/shared/auth.service';


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/session/session-list/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];


    constructor(private voterService: VoterService,
        private authService: AuthService) {

    }
    ngOnChanges() {

        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
                this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    toggleVote(session: ISession) {

        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {

        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);  // we want a brand new array, not a pointer to existing one
        } else {
            this.visibleSessions = this.sessions.filter(session =>
                session.level.toLocaleLowerCase() === filter
            );
        }
    }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    }
    if (s1.name === s2.name) {
        return 0;
    }
    return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
