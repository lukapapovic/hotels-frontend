import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { ViewHotelComponent } from './components/pages/view-hotel/view-hotel.component';
import { AddEditHotelComponent } from './components/admin/add-edit-hotel/add-edit-hotel.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'view-hotel/:id',component:ViewHotelComponent},
  {path:'add-hotel',component:AddEditHotelComponent},//,canActivate:[adminGuard],
  {path:'edit-hotel/:id',component:AddEditHotelComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
