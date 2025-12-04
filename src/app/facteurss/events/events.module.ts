import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEventComponent } from './list-event/list-event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { BesteventComponent } from './bestevent/bestevent.component';
import { PipesPipe } from 'src/app/shared/pipes/pipes.pipe';
import { DirectiveDirective } from 'src/app/shared/directives/directive.directive';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';
import { EventService } from 'src/app/shared/services/event.service';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailComponent,
    EventCardComponent,
    BesteventComponent,
    PipesPipe,
    DirectiveDirective,
    AddEventComponent,
    ParticipationFormComponent

  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  ,
  // Pas besoin de providers ici, EventService est déjà fourni au root
})
export class EventsModule { }
