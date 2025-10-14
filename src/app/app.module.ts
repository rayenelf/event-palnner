import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductComponent } from './layout/product/product.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ListEventComponent } from './layout/list-event/list-event.component';
import { CardEventComponent } from './layout/card-event/card-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    NotFoundComponent,
    ListEventComponent,
    CardEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
