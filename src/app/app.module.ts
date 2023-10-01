import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from  '@angular/common/http';
import { HotelCardComponent } from './components/common/hotel-card/hotel-card.component';
import { ViewHotelComponent } from './components/pages/view-hotel/view-hotel.component';
import { AddEditHotelComponent } from './components/admin/add-edit-hotel/add-edit-hotel.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    HotelCardComponent,
    ViewHotelComponent,
    AddEditHotelComponent,
    RegisterComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
