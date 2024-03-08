import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent implements OnInit{
  donationData:any;
  ngOnInit(): void {
      this.apiService.donations().subscribe((res)=>{
       this.donationData = res;
      })
      console.log(this.donationData)
  }
  constructor(private apiService:ApiServiceService){}

}
