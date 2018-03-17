import { Component } from '@angular/core';


@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)='toggleVisible()' class='well pointable'>
    <h4>
    <ng-content select='[well-title]'></ng-content>
    </h4>
    <ng-content select='[well-body]' *ngIf='visible'></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent {
    visible = true;

    toggleVisible() {
        this.visible = !this.visible;
    }

}
