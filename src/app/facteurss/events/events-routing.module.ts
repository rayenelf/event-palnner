import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import * as path from 'path';
import { ListEventComponent } from './list-event/list-event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ParticipationFormComponent } from './components/participation-form/participation-form.component';

const routes: Routes = [{ path: '', component: EventsComponent ,children:[
  {path:'events', component:ListEventComponent},
  {path:'details/:id', component:EventDetailComponent},
  { path: 'add-event', component: AddEventComponent },
  {path:'participe/:id/:price',component:ParticipationFormComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
