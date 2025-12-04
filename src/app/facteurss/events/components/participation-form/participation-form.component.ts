import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from 'src/app/layout/model/participation.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrls: ['./participation-form.component.css']
})
export class ParticipationFormComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  eventId!: number;
  eventPrice!: number;
  totalPrice = 0;

  participation: Participation = new Participation(1, 0, '', 0, 'pending');
  participations: Participation[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.eventPrice = +this.route.snapshot.paramMap.get('price')!;
    this.participation.eventId = this.eventId;
  }

  calculateTotalPrice() {
    if (this.participation.nbPlaces > 0) {
      this.totalPrice = this.participation.nbPlaces * this.eventPrice;
    } else {
      this.totalPrice = 0;
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      const newParticipation = {
        userId: 1,
        eventId: this.eventId,
        emailParticipant: this.participation.emailParticipant,
        nbPlaces: this.participation.nbPlaces,
        status: 'confirmed',
        registrationDate: new Date()
      };
      // call service to create participation and decrement places
      this.eventService.participate(this.eventId, this.participation.nbPlaces, newParticipation).subscribe(() => {
        alert('Participation enregistrée et places mises à jour ✅');
        form.resetForm();
        this.totalPrice = 0;
        // navigate back to events list
        this.router.navigate(['/events/events']);
      }, err => {
        console.error(err);
        alert('Erreur lors de la participation.');
      });
    }
  }

}
