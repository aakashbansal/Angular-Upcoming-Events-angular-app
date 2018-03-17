import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {

    constructor(private eventService: EventService) {

    }
    resolve() {
        return this.eventService.getEvents();  // .subscribe() on getEvents() not required
    }                                          // because Resolver subscribes by default.
                                               // But if we need to manually make http calls
}                                              // we need to subscribe or else the call will not be made
