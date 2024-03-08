import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userId: any;
  userData:any;
  ngOnInit(): void {
   this.userData = this.apiService.getUserData();
  }
  email: any;
  password: any;
  errorMessage: any = false;
  constructor(private apiService: ApiServiceService, private router: Router, private localStorageService: LocalStorageService) { }

  doLogin(data: any) {
    data = {
      "email": this.email,
      "password": this.password
    };

    this.apiService.login(data).subscribe((res:any) => {
     this.apiService.getRegisterData(res.message).subscribe((data:any)=>{
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userData", JSON.stringify(data));
      this.router.navigate(['/dashboard']);
     })

    }, (error: any) => {
      this.errorMessage = true;
    });
  }
}
