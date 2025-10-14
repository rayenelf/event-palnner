import { Component, OnInit } from '@angular/core';
import { Eventy } from '../model/event';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  searchTerm: string = '';
  favoris: Eventy[] = [];
  bestEvents: Eventy[] = [];

  events: Eventy[] = [
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
    },
    {
      id: 3,
      title: 'Hackathon National',
      description: 'Compétition de programmation sur 48 heures.',
      date: new Date('2025-12-01'),
      location: 'Sousse',
      price: 0,
      organizerId: 103,
      imageUrl: 'https://www.innovationhubafrica.com/wp-content/uploads/2021/04/hackathon-1.jpg',
      nbPlaces: 50,
      nbrLike: 1
    },
    {
      id: 4,
      title: 'Music Fest',
      description: 'Festival de musique avec des artistes locaux et internationaux.',
      date: new Date('2025-07-15'),
      location: 'Hammamet',
      price: 75,
      organizerId: 104,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/09/02/12/42/audience-918491_960_720.jpg',
      nbPlaces: 10,
      nbrLike: 5
    },
    {
      id: 5,
      title: 'Startup Pitch',
      description: 'Présentez votre projet devant des investisseurs.',
      date: new Date('2025-06-20'),
      location: 'Sfax',
      price: 20,
      organizerId: 105,
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*DMeRzZs4R9A7pR3N.jpg',
      nbPlaces: 5,
      nbrLike: 2
    },
    {
      id: 6,
      title: 'Game Expo',
      description: 'Salon du jeu vidéo et e-sport.',
      date: new Date('2025-08-11'),
      location: 'Tunis',
      price: 40,
      organizerId: 106,
      imageUrl: 'https://cdn.pixabay.com/photo/2017/01/09/22/20/people-1969146_960_720.jpg',
      nbPlaces: 100,
      nbrLike: 0
    },
    {
      id: 7,
      title: 'Workshop UI/UX',
      description: 'Atelier pratique pour apprendre le design d’interface utilisateur.',
      date: new Date('2025-05-03'),
      location: 'Monastir',
      price: 15,
      organizerId: 107,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/09/09/31/ux-1245798_960_720.jpg',
      nbPlaces: 8,
      nbrLike: 0
    }
  ];

  ngOnInit(): void {
    this.updateBestEvents();
  }

  likeEvent(event: Eventy) {
    event.nbrLike++;
    if (!this.favoris.find(fav => fav.id === event.id)) {
      this.favoris.push(event);
    }
  }

  get filteredEvents(): Eventy[] {
    if (!this.searchTerm) return this.events;

    const term = this.searchTerm.toLowerCase();
    return this.events.filter(event =>
      event.title.toLowerCase().includes(term) ||
      event.location.toLowerCase().includes(term)
    );
  }

  updateBestEvents() {
    this.bestEvents = this.events
      .slice()
      .sort((a, b) => a.nbPlaces - b.nbPlaces)
      .slice(0, 3);
  }
}
