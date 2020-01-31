import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { IEvent } from '../Share/event.model';
import { EventService } from '../Share/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  newEvent: IEvent;
  // newEventForm: FormGroup;
  // name: FormControl;
  // date: FormControl;
  // time: FormControl;
  // price: FormControl;
  // imageUrl: FormControl;


  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    // this.name = new FormControl('', []);
    // this.date = new FormControl('', []);
    // this.time = new FormControl('', []);
    // this.price = new FormControl('', []);
    // this.imageUrl = new FormControl('', []);

    // this.newEventForm = new FormGroup({
    //   name: this.name,
    //   date: this.date,
    //   time: this.time,
    //   price: this.price,
    //   imageUrl: this.imageUrl
    // });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    //console.log(formValues);
    this.eventService.addEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

}
