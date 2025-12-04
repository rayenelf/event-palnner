import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() event: any;

 @Input() listevent:boolean = true
 @Output() liked = new EventEmitter<any>();
 @Output() edit = new EventEmitter<any>();
 @Output() delete = new EventEmitter<number>();

 addEvent(event: any) {
   this.event.push(event);
 }

 likeEvent() {
   this.event.nbrLike++;
   this.liked.emit(this.event);
 }

 editEvent() {
   this.edit.emit(this.event);
 }

  deleteEvent() {
    if (this.event && this.event.id != null) {
      this.delete.emit(this.event.id);
    }
  }
}
