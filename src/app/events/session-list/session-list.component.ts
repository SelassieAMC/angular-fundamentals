import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../Share/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];
  constructor() { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sortBy === 'name' ?
        this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotes);
    }
  }
  filterSession(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions;
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLowerCase() === filterBy;
      });
    }
  }

}

function sortByName(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 0; } else { return -1; }
}

function sortByVotes(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
