import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { ProductComponent } from './layout/product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ListEventComponent } from './layout/list-event/list-event.component';
import { MainComponent } from './layout/main/main.component';
import { UpparecasefirstPipe } from './upparecasefirst.pipe';
import { TelephoneComponent } from './layout/telephone/telephone.component';
import { TvComponent } from './layout/tv/tv.component';
import { CardProductComponent } from './layout/card-product/card-product.component';
import { ReactiveFormComponent } from './layout/reactive-form/reactive-form.component';
import { DrivinformComponent } from './layout/drivinform/drivinform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    NotfoundComponent,
    MainComponent,
    UpparecasefirstPipe,
    TelephoneComponent,
    TvComponent,
    CardProductComponent,
    ReactiveFormComponent,
    DrivinformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
