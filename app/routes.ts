import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { Error404Component } from './events/errors/404.component';
import { EventsListResolver } from './events/events-list/events-list-resolver.service';
import { CreateSessionComponent } from './events/session/create-session/create-session.component';
import { EventResolver } from './events/event-details/event-details-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new-event', component: EventsCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/session/new', component: CreateSessionComponent },
    {
        path: 'events', component: EventsListComponent, resolve:
            { events: EventsListResolver }
    },
    {
        path: 'events/:id', component: EventDetailsComponent, resolve:
            { event: EventResolver }
    },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
