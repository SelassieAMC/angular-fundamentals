import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() set voted(val: boolean) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Input() count: number;
  @Output() vote = new EventEmitter();
  iconColor: string;
  constructor() { }

  onClick() {
    this.vote.emit({});
  }


}
