import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'upvote',
    templateUrl: 'app/common/upvote/upvote.component.html',
    styleUrls: [
        'app/common/upvote/upvote.component.css'
    ]
})
export class UpvoteComponent {

    @Input() count: number;
    @Input() set voted(val: boolean) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    @Input() iconColor: string;

    onClick() {
        this.vote.emit({});
    }
}
