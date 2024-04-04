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

    this.apiService.verifyloginOtp(data).subscribe(
      (response: any) => {
        console.log("OTP Verified successfully:", response);
        if (response.success) {
          // Success operations
          this.router.navigate(["/dashboard"]);
        } else {
          // Do other thing (Failure operations)
          console.error("OTP verification failed:", response.error); // Assuming there's an error property in the response
          this.errorMessage = true; // Set error message flag
        }
      },
      (error: any) => {
        console.error("Error sending OTP:", error);
        this.errorMessage = true; // Set error message flag
      }
    );
  }

  clearErrorMessage() {
    this.errorMessage = "";
  }
}
