import { SessionListComponent } from './session-list.component';
import { ISession } from '../../shared/event.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockVoterService, mockAuthService;

    beforeEach(() => {
        component = new SessionListComponent(mockVoterService, mockAuthService);
    });

    describe('ngOnchanges', () => {

        it('should filter the sessions correctly', () => {
            component.eventId = 3;
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
                { name: 'session 3', level: 'intermediate' }
            ];
            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            component.eventId = 3;
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.sessions = <ISession[]>[
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' },
                { name: 'session 2', level: 'intermediate' }
            ];

            component.ngOnChanges();

            expect(component.visibleSessions[2].name).toBe('session 3');
        });

    });
});