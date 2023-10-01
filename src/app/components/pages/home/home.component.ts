import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  hotels:Hotel[]=[];
  no:number=1;
  constructor(private hotelService:HotelService){}
  ngOnInit(): void {
   this.hotelService.getAllHotels().subscribe(data=>{
        this.hotels=data
      })
  }
  
}
