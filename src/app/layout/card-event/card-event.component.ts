import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Eventy } from '../model/event';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent {
  @Input() event!: Eventy;
  @Output() liked = new EventEmitter<Eventy>();

  onLike() {
    this.liked.emit(this.event);
  }
}
