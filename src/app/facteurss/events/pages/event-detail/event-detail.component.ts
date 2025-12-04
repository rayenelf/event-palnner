import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  //  listEevents = [
  //   {
  //     id: 1,
  //     title: 'Angular Summit',
  //     description: 'Conférence sur Angular et l’écosystème front-end.',
  //     date: new Date('2025-11-10'),
  //     location: 'Tunis',
  //     price: 50,
  //     organizerId: 101,
  //     imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
  //     nbPlaces: 25,
  //     nbrLike: 0
  //   },
  //   {
  //     id: 2,
  //     title: 'Web Dev Days',
  //     description: 'Journée dédiée aux frameworks web modernes.',
  //     date: new Date('2025-01-05'),
  //     location: 'Ariana',
  //     price: 30,
  //     organizerId: 102,
  //     imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
  //     nbPlaces: 0,
  //     nbrLike: 3
  //   }
  // ];
  constructor(private route: ActivatedRoute ,private eventService : EventService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getAllEvents().subscribe((events: any[]) => {
      this.event = events.find(e => e.id === id);
    });
  }

  /*id:number
  ngOnInit(){
  this.id=this.route.snapshot.params{'id'}}*/
}
