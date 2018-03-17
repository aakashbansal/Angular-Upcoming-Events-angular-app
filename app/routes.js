"use strict";
var events_list_component_1 = require("./events/events-list/events-list.component");
var event_details_component_1 = require("./events/event-details/event-details.component");
var events_create_component_1 = require("./events/events-create/events-create.component");
var _404_component_1 = require("./events/errors/404.component");
var events_list_resolver_service_1 = require("./events/events-list/events-list-resolver.service");
var create_session_component_1 = require("./events/session/create-session/create-session.component");
var event_details_resolver_service_1 = require("./events/event-details/event-details-resolver.service");
exports.appRoutes = [
    { path: 'events/new-event', component: events_create_component_1.EventsCreateComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/session/new', component: create_session_component_1.CreateSessionComponent },
    {
        path: 'events', component: events_list_component_1.EventsListComponent, resolve: { events: events_list_resolver_service_1.EventsListResolver }
    },
    {
        path: 'events/:id', component: event_details_component_1.EventDetailsComponent, resolve: { event: event_details_resolver_service_1.EventResolver }
    },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: 'events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map