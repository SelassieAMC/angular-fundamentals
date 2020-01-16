import { Component, OnInit } from '@angular/core';
import { EventService } from '../Share/event.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent } from '../share/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  id: number;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.event = this.eventService.getEventById(this.id);
  }
}
