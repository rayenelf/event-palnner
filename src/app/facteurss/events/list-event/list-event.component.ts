import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  selectedEvent: Events | null = null;
  onEditEvent(event: Events) {
    this.selectedEvent = { ...event };
    // Ici, tu peux ouvrir un formulaire ou une modal pour éditer l'event
    // Exemple : afficher un formulaire d'édition sous la liste
  }

  onDeleteEvent(id: number) {
    if (!confirm('Voulez-vous vraiment supprimer cet événement ?')) return;
    this.eventService.deleteEvent(id).subscribe(() => {
      // reload list
      this.eventService.getAllEvents().subscribe((data: Events[]) => {
        this.listEevents = data;
        this.updateBestEvents();
      });
    });
  }
listEevents:Events[]=[];
events:Events[]=[];
 showBest = false;
  bestEvents: Events[] = [];
searchText: string = '';
  constructor(private eventService : EventService) { }

//   ngOnInit(): void {
// this.listEevents = this.listEvenets.getAllEvents();
//      this.bestEvents = this.listEevents
//       .filter(e => e.nbrLike > 0)
//       .sort((a, b) => b.nbrLike - a.nbrLike)
//       .slice(0, 3);

//   }

ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data: Events[]) => {
      this.listEevents = data;
      this.updateBestEvents();
    });
  }
  // get filteredEvents() {
  //   return this.listEevents.filter(e =>
  //     e.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     e.location.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }


  // ajouter(productId: number){

  //  const item = this.listEevents.find(e => e.id === productId);
  // if (item) {
  //   item.nbrLike += 1;
  // }


  // }

  // ajouter(ev: Events) {
  //   ev.nbrLike++;
  //   this.bestEvents = this.listEevents
  //     .filter(e => e.nbrLike > 0)
  //     .sort((a, b) => b.nbrLike - a.nbrLike)
  //     .slice(0, 3); // 🔥 Top 3
  // }

ajouter(ev: Events) {
  ev.nbrLike++;
  this.eventService.updateEvent(ev).subscribe(() => {
    this.updateBestEvents();
  });
}

   filteredEvents() {
    return this.listEevents.filter(ev =>
      ev.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // onEventLiked(event: any) {
  //   this.updateBestEvents();
  // }

  toggleBest() {
    this.showBest = !this.showBest;
  }

  private updateBestEvents() {
    this.bestEvents = this.listEevents
      .filter(e => e.nbrLike > 0)
      .sort((a, b) => b.nbrLike - a.nbrLike)
      .slice(0, 3);
  }
likedEvents: any[] = [];

onEventLiked(event: any) {
  // ta3mel push ken event moch mawjouda déjà
  const exists = this.likedEvents.find(e => e.id === event.id);
  if (!exists) {
    this.likedEvents.push(event);
  }
   this.updateBestEvents();
}
// addEvent(event: any) {
//     this.events.push(event);
//   }
onEventAdded(event: Events) {
    this.listEevents.push(event);
    this.updateBestEvents();
  }
}
