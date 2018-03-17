import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'app/common/simple-modal/simple-modal.component.html',
    styleUrls: [
        'app/common/simple-modal/simple-modal.component.css'
    ]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor( @Inject(JQ_TOKEN) private $: any) {

    }

    closeModal() {
        if (this.closeOnBodyClick === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
