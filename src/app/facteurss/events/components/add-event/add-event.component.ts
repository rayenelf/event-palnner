import { Component, EventEmitter, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/shared/services/event.service';
import { futurDateValidator } from 'src/app/shared/validator/futur-date.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

  export class AddEventComponent implements OnInit {

    eventForm!: FormGroup;
    @Output() eventAdded = new EventEmitter<any>();
    eventToEdit: any = null;
    isEditMode: boolean = false;

    constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, public eventService: EventService) {}

    ngOnInit() {
      this.initForm();
      // check query params for id
      this.route.queryParams.subscribe(params => {
        const id = params['id'];
        if (id) {
          const numericId = Number(id);
          this.eventService.getEventById(numericId).subscribe(ev => {
            this.eventToEdit = ev;
            this.isEditMode = true;
            this.patchForm(ev);
          });
        }
      });
    }

    initForm() {
      this.eventForm = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]],
        description: ['', [Validators.required, Validators.minLength(30)]],
        date: ['', [Validators.required, futurDateValidator(7)]],
        price: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
        places: ['', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$')]],
        image: [''],
        domaines: this.fb.array([this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])])
      });
    }

    patchForm(event: any) {
      this.eventForm.patchValue({
        title: event.title || '',
        description: event.description || '',
        date: event.date ? (event.date as string).split('T')[0] : '',
        price: event.price || '',
        places: event.nbPlaces || event.places || '',
        image: event.imageUrl || event.image || ''
      });
      // If we are editing an existing event, relax the date validator
      if (this.isEditMode) {
        const dateControl = this.eventForm.get('date');
        if (dateControl) {
          dateControl.setValidators([Validators.required]);
          dateControl.updateValueAndValidity();
        }
      }
      if (event.domaines && Array.isArray(event.domaines)) {
        this.eventForm.setControl('domaines', this.fb.array(event.domaines.map((d: string) => this.fb.control(d, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]))));
      }
    }

    get domaines() {
      return this.eventForm.get('domaines') as FormArray;
    }

    addDomain() {
      this.domaines.push(this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]));
    }

    onSubmit() {
      if (this.eventForm.valid) {
        const formVal = this.eventForm.value;
        const event = {
          ...formVal,
          nbLikes: this.isEditMode && this.eventToEdit ? this.eventToEdit.nbLikes : 0,
          organizerId: this.isEditMode && this.eventToEdit ? this.eventToEdit.organizerId : 1,
          id: this.isEditMode && this.eventToEdit ? this.eventToEdit.id : undefined,
          imageUrl: formVal.image,
          nbPlaces: formVal.places
        };
        if (this.isEditMode && event.id) {
          this.eventService.updateEvent(event).subscribe(() => {
            alert('Événement mis à jour avec succès!');
            this.router.navigate(['/events/events']);
          });
        } else {
          this.eventService.saveEvent(event).subscribe(() => {
            alert('Événement ajouté avec succès!');
            this.router.navigate(['/events/events']);
          });
        }
      }
    }

  }
