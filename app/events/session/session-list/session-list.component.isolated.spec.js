"use strict";
var session_list_component_1 = require("./session-list.component");
describe('SessionListComponent', function () {
    var component;
    var mockVoterService, mockAuthService;
    beforeEach(function () {
        component = new session_list_component_1.SessionListComponent(mockVoterService, mockAuthService);
    });
    describe('ngOnchanges', function () {
        it('should filter the sessions correctly', function () {
            component.eventId = 3;
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
                { name: 'session 3', level: 'intermediate' }
            ];
            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(2);
        });
        it('should sort the sessions correctly', function () {
            component.eventId = 3;
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' },
                { name: 'session 2', level: 'intermediate' }
            ];
            component.ngOnChanges();
            expect(component.visibleSessions[2].name).toBe('session 3');
        });
    });
});
//# sourceMappingURL=session-list.component.isolated.spec.js.map