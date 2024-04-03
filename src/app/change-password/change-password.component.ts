import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit{
  password:any;
  new_password:any;
  userId:any;
  ngOnInit(): void {
  }
  constructor(private apiService:ApiServiceService){}
  change(){
    let data = {
      "password":this.password,
      "new_password": this.new_password
    }
    this.apiService.changePassword(data).subscribe((res)=>{
        this.apiService.getRegisterData().subscribe((res)=>{
        console.log(res)
       })
    })
  }
}
