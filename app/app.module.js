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
require("./rxjs-extensions");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var events_app_component_1 = require("./events-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var toastr_service_1 = require("./common/toastr.service");
var routes_1 = require("./routes");
var events_list_component_1 = require("./events/events-list/events-list.component");
var events_thumbnail_component_1 = require("./events/events-thumbnail/events-thumbnail.component");
var event_service_1 = require("./events/shared/event.service");
var event_details_component_1 = require("./events/event-details/event-details.component");
var events_create_component_1 = require("./events/events-create/events-create.component");
var _404_component_1 = require("./events/errors/404.component");
var events_list_resolver_service_1 = require("./events/events-list/events-list-resolver.service");
var auth_service_1 = require("./user/shared/auth.service");
var forms_1 = require("@angular/forms");
var create_session_component_1 = require("./events/session/create-session/create-session.component");
var session_list_component_1 = require("./events/session/session-list/session-list.component");
var collapsible_well_component_1 = require("./common/collapsible-well.component");
var duration_pipe_1 = require("./events/shared/duration.pipe");
var jQuery_service_1 = require("./common/jQuery.service");
var simple_modal_component_1 = require("./common/simple-modal/simple-modal.component");
var modal_trigger_directive_1 = require("./common/modal-trigger.directive");
var upvote_component_1 = require("./common/upvote/upvote.component");
var voter_service_1 = require("./common/upvote/voter.service");
var location_validator_directive_1 = require("./events/events-create/location-validator.directive");
var event_details_resolver_service_1 = require("./events/event-details/event-details-resolver.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)
        ],
        declarations: [
            events_app_component_1.EventsAppComponent,
            events_list_component_1.EventsListComponent,
            navbar_component_1.NavBarComponent,
            events_thumbnail_component_1.EventsThumbnail,
            event_details_component_1.EventDetailsComponent,
            events_create_component_1.EventsCreateComponent,
            _404_component_1.Error404Component,
            create_session_component_1.CreateSessionComponent,
            session_list_component_1.SessionListComponent,
            collapsible_well_component_1.CollapsibleWellComponent,
            duration_pipe_1.DurationPipe,
            simple_modal_component_1.SimpleModalComponent,
            modal_trigger_directive_1.ModalTriggerDirective,
            upvote_component_1.UpvoteComponent,
            location_validator_directive_1.LocationValidator
        ],
        bootstrap: [
            events_app_component_1.EventsAppComponent
        ],
        providers: [
            event_service_1.EventService,
            event_details_resolver_service_1.EventResolver,
            events_list_resolver_service_1.EventsListResolver,
            auth_service_1.AuthService,
            voter_service_1.VoterService,
            {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
            },
            {
                provide: toastr_service_1.TOASTR_TOKEN,
                useValue: toastr
            },
            {
                provide: jQuery_service_1.JQ_TOKEN,
                useValue: jQuery
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved the current information. Do you wish to leave ?');
    }
    return true;
}
//# sourceMappingURL=app.module.js.map