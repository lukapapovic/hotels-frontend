import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.scss']
})
export class ViewHotelComponent implements OnInit{
  hotel:Hotel=new Hotel()
  constructor(private hotelService:HotelService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData=>{
      let hotelId :number=paramsData['id']
      this.hotelService.getHotelById(hotelId).subscribe(data=>{
        this.hotel=data
      })
    })
      
  }

}
