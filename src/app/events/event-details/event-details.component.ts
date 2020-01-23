import { Component, OnInit } from '@angular/core';
import { EventService } from '../Share/event.service';
import { ActivatedRoute} from '@angular/router';
import { IEvent, ISession } from '../share/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  id: number;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.event = this.eventService.getEventById(this.id);
  }

  addSession() {
    this.addMode = true;
  }

  saveEventSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map (s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event),
    this.addMode = false;
  }

  cancelCreateSession() {
    this.addMode = false;
  }
}
