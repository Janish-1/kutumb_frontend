import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css'
})
export class VerifyOtpComponent implements OnInit {
  otp1:any;
  otp2:any;
  otp3:any;
  otp4:any;
  otp5:any;
  otp6:any;
  otp:any;

  ngOnInit(): void {}
  constructor(private apiService:ApiServiceService, private route:Router){}
  verifyOtp() {
      this.otp  = this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6;
      let data ={
        "otp" : this.otp
      }
      this.apiService.verifyOtp(data).subscribe((res)=>{
         this.route.navigate(['/changePassword']);
      })
  }
}
