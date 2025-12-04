import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
listEevents:Events[]=[]
searchText: string = '';
  constructor() { }

  ngOnInit(): void {
       this.listEevents = [
      {
        id: 1,
        title: 'Angular Summit',
        description: 'Conférence sur Angular et l’écosystème front-end.',
        date: new Date('2025-11-10'),
        location: 'Tunis',
        price: 50,
        organizerId: 101,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 25,
        nbrLike: 0
      },
      {
        id: 2,
        title: 'Web Dev Days',
        description: 'Journée dédiée aux frameworks web modernes.',
        date: new Date('2025-01-05'),
        location: 'Ariana',
        price: 30,
        organizerId: 102,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 0,
        nbrLike: 3
      }
    ];
 
  }
  get filteredEvents() {
    return this.listEevents.filter(e =>
      e.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      e.location.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  ajouter(productId: number){
      
   const item = this.listEevents.find(e => e.id === productId);
  if (item) {
    item.nbrLike += 1;
  }

  
  }
}
