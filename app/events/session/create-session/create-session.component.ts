import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { restrictedWords } from '../../shared/restricted-words.validator';
import { ISession } from '../../shared/event.model';


@Component({
    selector: 'create-session',
    templateUrl: 'app/events/session/create-session/create-session.component.html',
    styleUrls: [
        'app/events/session/create-session/create-session.component.css'
    ]
})
export class CreateSessionComponent implements OnInit {

    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    @Output() saveNewSession: EventEmitter<ISession> = new EventEmitter<ISession>();
    @Output() cancelNewSession: EventEmitter<any> = new EventEmitter<any>();

    private restrictedWordsList: string[] = ['foo', 'bar', 'this', 'that', 'good', 'bad'];

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(this.restrictedWordsList)]);
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(formValue) {
        const session: ISession = {
            id: undefined,
            name: formValue.name,
            duration: +formValue.duration,
            level: formValue.level,
            presenter: formValue.presenter,
            abstract: formValue.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelNewSession.emit();
    }
}
