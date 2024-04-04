import { Component, ViewChild } from "@angular/core";
import { ApiServiceService } from "../service/api-service.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LocalStorageService } from "../service/local-storage.service";

@Component({
  selector: "app-verifyloginotp",
  templateUrl: "./verifyloginotp.component.html",
  styleUrl: "./verifyloginotp.component.css",
})
export class VerifyloginotpComponent {
  userId: any;
  userData:any;
  ngOnInit(): void {
   this.userData = this.apiService.getUserData();
  }
  password: any;
  otp: string = "";
  errorMessage: any = false;
  email: any;

  constructor(
    private apiService: ApiServiceService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  submitOTP() {
    // Logic to validate and process OTP
    const data = {
      email: localStorage.getItem("otpEmail"),
      otp: this.otp,
    };

    this.apiService.verifyloginOtp(data).subscribe((res:any) => {
      this.apiService.getRegisterData(res.message).subscribe((data:any)=>{
       localStorage.setItem("userId", data.id);
       localStorage.setItem("userEmail", data.email);
       localStorage.setItem("first_name",data.first_name);
       localStorage.setItem("userData", JSON.stringify(data));
       this.router.navigate(['/dashboard']);
      })
 
     }, (error: any) => {
       this.errorMessage = true;
     });
   }

  clearErrorMessage() {
    this.errorMessage = "";
  }
}
