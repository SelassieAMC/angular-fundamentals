import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'app-simple-modal',
  template: `
    <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})

export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnClick: string;
  @ViewChild('modalContainer', null) containerEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any ) {
  }

  closeModal() {
    if (this.closeOnClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
