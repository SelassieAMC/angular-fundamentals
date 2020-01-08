import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <!-- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">Time: {{event?.time}} conditional style ways-->
      <!-- <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}"
      [ngSwitch]="event?.time">Time: {{event?.time}} conditional style ways-->
      <!-- <div [ngClass] = "getStartTimeClassStyle()" [ngSwitch]="event?.time">Time: {{event?.time}} conditional style ways-->
      <!-- <div [ngStyle]="{'color': event?.time === '8:00 am' ? 'green' : 'gray', 'font-weight': event?.time === '8:00 am' ?
      'bold' : 'normal'}" [ngSwitch]="event?.time">Time: {{event?.time}} conditional style ways-->
      <div [ngStyle] = "getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'08:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf = "event?.location" >
        <span>Location: {{event?.location?.address}}</span>
        <span>&nbsp;</span>
        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineURL">Online URL: {{event?.onlineURL}}</div>
      <!-- <button (click)="clickEvent();">Click me!</button> -->
    </div>
  `,
  styles: [`
    .thumbnail {min-height: 210px; }
    .green { color: green; }
    .bold { font-weight: bold; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() clickme = new EventEmitter();
  // localVariable = 'Local Variable from child component';
  constructor() { }

  getStartTimeStyle() {
    if ( this.event && this.event.time === '8:00 am') {
      return {color: 'green', 'font-weight': 'bold'};
    }
    return {};
  }
  // clickEvent(){
  //   console.log('Emit');
  //   this.clickme.emit('hello World');
  // }

  // tryTemplate() {
  //   console.log('Hello Template and local variable');
  // }
}
