import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <!-- <button (click)="clickEvent();">Click me!</button> -->
    </div>
  `
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() clickme = new EventEmitter();
  // localVariable = 'Local Variable from child component';
  constructor() { }

  // clickEvent(){
  //   console.log('Emit');
  //   this.clickme.emit('hello World');
  // }

  // tryTemplate() {
  //   console.log('Hello Template and local variable');
  // }
}
