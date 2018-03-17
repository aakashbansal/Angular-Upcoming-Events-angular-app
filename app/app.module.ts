
import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { appRoutes } from './routes';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsThumbnail } from './events/events-thumbnail/events-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsCreateComponent } from './events/events-create/events-create.component';
import { Error404Component } from './events/errors/404.component';
import { EventsListResolver } from './events/events-list/events-list-resolver.service';
import { AuthService } from './user/shared/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/session/create-session/create-session.component';
import { SessionListComponent } from './events/session/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './common/upvote/upvote.component';
import { VoterService } from './common/upvote/voter.service';
import { LocationValidator } from './events/events-create/location-validator.directive';
import { EventResolver } from './events/event-details/event-details-resolver.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],

    declarations: [
        EventsAppComponent,
        EventsListComponent,
        NavBarComponent,
        EventsThumbnail,
        EventDetailsComponent,
        EventsCreateComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator
    ],

    bootstrap: [
        EventsAppComponent
    ],

    providers: [
        EventService,
        EventResolver,
        EventsListResolver,
        AuthService,
        VoterService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        }
    ]

})
export class AppModule {

}

function checkDirtyState(component: EventsCreateComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved the current information. Do you wish to leave ?');
    }
    return true;
}
