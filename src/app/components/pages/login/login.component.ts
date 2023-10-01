import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user :User=new User();

  constructor(private auth :AuthService){}

  login(){
    if(!this.user.username|| !this.user.password){
      alert('Unesite sve podatke')
      return
    }
    
    this.auth.login(this.user).subscribe((data:any)=>{
      if(data.success){
        alert('Ulogovan');
        localStorage.setItem('hotels-token',data.token)
        window.location.href="/"
      }
      else{
        alert('Pogresni podatci')
      }
    }) 
  }

}
