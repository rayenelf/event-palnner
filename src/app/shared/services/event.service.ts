import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../../models/events';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:3001/events';
  constructor(private http: HttpClient, private router: Router) { }

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl);
  }

  getEventById(id: number): Observable<Events> {
    return this.http.get<Events>(`${this.apiUrl}/${id}`);
  }

  createParticipation(participation: any): Observable<any> {
    const url = this.apiUrl.replace('/events', '/participations');
    return this.http.post<any>(url, participation);
  }

  participate(eventId: number, nbPlaces: number, participant: any): Observable<any> {
    // create participation
    const participation = {
      eventId,
      nbPlaces,
      emailParticipant: participant.emailParticipant || participant.email || '',
      userId: participant.userId || 1,
      status: 'confirmed',
      registrationDate: new Date()
    };
    return new Observable(observer => {
  this.createParticipation(participation).subscribe({
    next: () => {
      // then decrement event places
      this.getEventById(eventId).subscribe({
        next: (ev) => {
          const updated: any = { ...ev };
          // handle both nbPlaces and places fields
          if (updated.nbPlaces != null) {
            updated.nbPlaces = Math.max(0, (Number(updated.nbPlaces) || 0) - nbPlaces);
          }
          if (updated.places != null) {
            updated.places = Math.max(0, (Number(updated.places) || 0) - nbPlaces);
          }
          this.updateEvent(updated).subscribe(
             () => {
              observer.next(true);
              observer.complete();
            },
            (err) => observer.error(err)
          );
        },
        error: (err) => observer.error(err)
      });
    },
    error: (err) => observer.error(err)
  });
});
  }

  saveEvent(event: Events): Observable<Events> {
    return this.http.post<Events>(this.apiUrl, event);
  }

  updateEvent(event: Events): Observable<Events> {
    return this.http.put<Events>(`${this.apiUrl}/${event.id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
