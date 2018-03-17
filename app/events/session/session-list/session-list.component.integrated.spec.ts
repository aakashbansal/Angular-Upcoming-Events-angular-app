import { SessionListComponent } from './session-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AuthService } from '../../../user/shared/auth.service';
import { VoterService } from '../../../common/upvote/voter.service';
import { UpvoteComponent } from '../../../common/upvote/upvote.component';
import { DurationPipe } from '../../shared/duration.pipe';
import { CollapsibleWellComponent } from '../../../common/collapsible-well.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Session List Component', () => {

    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        debugEl: DebugElement,
        element: HTMLElement;

    beforeEach(async(() => {

        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { name: 'Joe' }
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                // UpvoteComponent,
                // CollapsibleWellComponent,
                DurationPipe
            ],
            providers: [
                {
                    provide: AuthService,
                    useValue: mockAuthService
                },
                {
                    provide: VoterService,
                    useValue: mockVoterService
                }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {

        it('should have the correct session title', () => {

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.sessions = [{
                id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner',
                abstract: 'abstract', voters: ['john', 'bob']
            }];

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');

            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');



        });
    });

});
