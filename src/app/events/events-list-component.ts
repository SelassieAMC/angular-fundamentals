import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <div>
  <hr>
  <!-- <app-event-thumbnail [event]="event1" (clickme)="eventClickHandler($event);"></app-event-thumbnail> -->
  <!-- <app-event-thumbnail #thumbnail [event]="event1"></app-event-thumbnail> -->
  <!-- <button (click)="thumbnail.tryTemplate()">{{thumbnail.localVariable}}</button> -->
  <app-event-thumbnail [event]="event1"></app-event-thumbnail>
`
})

export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '09/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  // eventClickHandler(value){
  //   console.log('This is the value returned: ' + value);
  // }
}
