import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent implements OnInit{
 ngOnInit(): void {
     
 } 
 constructor(private apiService:ApiServiceService, private route:Router){}
 email:any;
 getEmail(){
  let data = {
    "email": this.email
  }
  this.apiService.forgetPassword(data).subscribe((res)=>{
    console.log(res);
    this.route.navigate(['/verify'])
  }, (error: any) => {
    console.error('Error:', error);
  });
  }
}
