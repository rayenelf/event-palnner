import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './layout/product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { MainComponent } from './layout/main/main.component';
import { DrivinformComponent } from './layout/drivinform/drivinform.component';

const routes: Routes = [
  
  {path:"" , component:UserComponent},
  {path:"main",component:MainComponent},
  {path :"product",component:ProductComponent},
  {path:"driven",component:DrivinformComponent},
  //{path:"event",component:ListEventComponent},
  
  { path: 'events', loadChildren: () => import('./facteurss/events/events.module').then(m => m.EventsModule) },
  
  { path: 'tickets', loadChildren: () => import('./facteurss/tickets/tickets.module').then(m => m.TicketsModule) },
  
  { path: 'feedback', loadChildren: () => import('./facteurss/feedback/feedback.module').then(m => m.FeedbackModule) },
  
  { path: 'users', loadChildren: () => import('./facteurss/users/users.module').then(m => m.UsersModule) },
  {path:"**",component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
