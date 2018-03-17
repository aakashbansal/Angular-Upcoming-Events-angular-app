import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
    selector: 'events-thumbnail',
    templateUrl: 'app/events/events-thumbnail/events-thumbnail.component.html',
    styleUrls: [
        'app/events/events-thumbnail/events-thumbnail.component.css'
    ]
})
export class EventsThumbnail {
    @Input() event: IEvent;

    getEarlyStartStyle(): any {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        if (isEarlyStart) {
            return { color: '#003300', 'font-weight' : 'bold'};
        }
        return {};
    }
}
