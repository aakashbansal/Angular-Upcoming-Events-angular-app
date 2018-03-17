import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';


@Component({
    templateUrl: 'app/events/events-create/events-create.component.html',
    styleUrls: [
        'app/events/events-create/events-create.component.css'
    ]
})
export class EventsCreateComponent {

    isDirty = true;

    constructor(private router: Router,
        private eventService: EventService) {

    }
    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(event => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

}
