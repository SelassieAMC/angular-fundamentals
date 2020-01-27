import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/Share/event.service';
import { ISession } from '../events/Share/event.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[] = [];
  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(value: string) {
    this.eventService.searchSessions(value).subscribe
      (session => {
        this.foundSessions = session;
      });
    //console.log(this.foundSessions);
  }

}
