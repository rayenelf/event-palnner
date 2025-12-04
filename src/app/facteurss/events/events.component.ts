import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { Events } from '../../models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Events[] = [];
  selectedEvent: Events | null = null;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe((data: Events[]) => {
      this.events = data;
    });
  }

  editEvent(event: Events): void {
    this.selectedEvent = { ...event };
  }

  updateEvent(): void {
    if (this.selectedEvent) {
      this.eventService.updateEvent(this.selectedEvent).subscribe(() => {
        this.selectedEvent = null;
        this.loadEvents();
      });
    }
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.loadEvents();
    });
  }
}
