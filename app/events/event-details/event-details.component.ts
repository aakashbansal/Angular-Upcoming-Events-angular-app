import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';
import { Params } from '@angular/router';


@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: [
        'app/events/event-details/event-details.component.css'
    ]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode = false;
    filterBy = 'all';
    sortBy = 'votes';



    constructor(private eventService: EventService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.data.forEach((data) => {          // forEach (equivalent to) subscribe
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event)
            .subscribe(e => {
                this.addMode = false;
            });

    }

    cancelAddSession() {
        this.addMode = false;
    }
}
