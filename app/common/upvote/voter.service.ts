import { Injectable } from '@angular/core';
import { ISession } from '../../events/shared/event.model';
import { AuthService } from '../../user/shared/auth.service';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class VoterService {

    constructor(private http: Http) {

    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
        const postUrl = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(postUrl)
            .catch(this.handleError)
            .subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        const postUrl = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(postUrl, JSON.stringify({}), options)
            .catch(this.handleError)
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }

    handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
