import { Component, OnInit } from '@angular/core';
import { EventService } from './Share/event.service';
import { ToastrService } from '../common/toastr.service';
import { RouterModule, ActivatedRoute } from '@angular/router';

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
  <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <app-event-thumbnail (click)="handleToastrMessage(event.name)"  [event]="event"></app-event-thumbnail>
    </div>
  </div>
`
})

export class EventListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe( events => {
    //   this.events = events;
    // });
    this.events = this.route.snapshot.data.events;
  }
  // eventClickHandler(value){
  //   console.log('This is the value returned: ' + value);
  // }
  handleToastrMessage(name: string) {
    this.toastrService.sucess(name);
  }
}
