import { Component } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';
import { EventsCreateComponent } from '../events/events-create/events-create.component';
import { EventService } from '../events/shared/event.service';
import { ISession } from '../events/shared/event.model';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: [
        'app/nav/navbar.component.css'
    ]
})
export class NavBarComponent {

    searchTerm = '';
    foundSessions: ISession[] = [];
    searchSessionsModal = 'searchResults';
 
    constructor(private authService: AuthService,
        private eventService: EventService) {

    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}
