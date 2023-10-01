import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.scss']
})
export class AddEditHotelComponent implements OnInit {
  hotel:Hotel=new Hotel()
  edit:boolean=false;

  constructor(private hotelService:HotelService,private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramData=>{
if(paramData['id']){
  this.edit=true;
  this.hotelService.getHotelById(paramData['id']).subscribe(data=>{
    this.hotel=data
  })
}
    })
    
  }

    saveHotel(){
      if(this.edit){
        this.hotelService.updateHotel(this.hotel).subscribe(data=>{
          this.router.navigateByUrl('/hotels')
        })
      }
      else{
        this.hotelService.insertHotel(this.hotel).subscribe(data=>{
          this.router.navigateByUrl('/hotels')
        })
      }
      
    }
  
  
  

}
