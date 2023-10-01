import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  user:User=new User()

  constructor(private auth :AuthService){}

  register(){
    if(!this.user.username|| !this.user.password || !this.user.confirmPassword){
      alert('Unesite sve podatke')
      return
    }
    if(this.user.password != this.user.confirmPassword){
      alert('Ne poklapaju se lozinke')
      return
    }
    this.auth.register(this.user).subscribe((data:any)=>{
      if(data.success){
        alert('Registrovan');
        localStorage.setItem('hotels-token',data.token)
        window.location.href="/"
      }
      
    }) 
  }

}


