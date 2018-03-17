import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';

@Component({
    templateUrl: 'app/events/events-list/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    pageTitle = 'Upcoming Angular Events';
    events: IEvent[];

    constructor(private eventService: EventService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

}
