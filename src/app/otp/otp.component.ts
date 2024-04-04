import { Component, ViewChild } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  email: any;
  errorMessage: any = false;

  constructor(private apiService: ApiServiceService, private router: Router, private localStorageService: LocalStorageService) { }
  
  doLogin(loginForm: NgForm) {
    if (loginForm.invalid) {
      return; // Do not proceed if form is invalid
    }

    const data = {
      email: this.email
    };

    this.apiService.sendOtp(data).subscribe((response: any) => {
      console.log('OTP sent successfully:', response);
      localStorage.setItem("otpEmail", data.email);
      this.router.navigate(['/verifyloginotp']);
    }, (error: any) => {
      console.error('Error sending OTP:', error);
      this.errorMessage = true; // Set error message flag
    });
  }
}
