import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';;
@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
 userId: any;
 ngOnInit(): void { }
 @ViewChild('registerForm') registerForm!: NgForm;
 constructor(private apiService: ApiServiceService, private route: Router, private localStorageService: LocalStorageService) { }
 blood_group: any;
 VolunteerAadharNo: any;
 adhaar: any;
 batch: any;
 batalian: any;
 awards: any;
 other: any;
 panNo: any;
 labelType: any;
 labelValue: any;
 selectedOption: any;
 email: any;
 password: any;
 confirmPassword: any;
 numericValue: any;
 numberSelectedOption: any;
 ConfirmPswrdErrorMessage: any;
 panNo1: any;
 tax_benefit: any;
 checkEmail: any = false;
 successAlert: any = false;
 name: any = '';
 getDonation() {
   this.labelType = document.getElementById('getLabelValue') as HTMLSelectElement;
   this.labelValue = this.labelType.value;
 }


 getType() {
   var type = document.getElementById('selectType') as HTMLSelectElement;
   var value = type.value;


   if (value == 'Volunteer') {
     this.blood_group = '',
       this.VolunteerAadharNo = ''
   } else if (value == 'Member') {
     this.adhaar = ''
   } else if (value == 'Army Member') {
     this.batch = '';
     this.batalian = '';
     this.awards = '',
       this.other = ''
   } else if (value == 'Donation') {
     if (this.labelValue) {
       this.panNo = ''
     }
   }


   switch (value) {
     case 'Volunteer':
       this.numericValue = 1;
       break;
     case 'Member':
       this.numericValue = 2;
       break;
     case 'Army Member':
       this.numericValue = 3;
       break;
     case 'Donation':
       this.numericValue = 4;
       break;
     default:
       this.numericValue = null;
   }


   this.numberSelectedOption = this.numericValue;
 }




 doRegister(data: any) {
   data = {
     "username": this.email,
     "email": this.email,
     "password": this.password,
     "account_type": this.numberSelectedOption,
     "adhaar": this.adhaar,
     "awards": this.awards,
     "blood_group": this.blood_group,
     "batch": this.batch,
     "batalian": this.batalian,
     "tax_benefit": this.tax_benefit
   }
   console.log(data)
   if (this.password != this.confirmPassword) {
     console.log('Incorrect confirm password');
     this.ConfirmPswrdErrorMessage = "Incorrect confirm password";
   }


   this.apiService.register(data).subscribe((res) => {
     localStorage.setItem("userId", res.id);
     localStorage.setItem("userEmail", res.email);
     localStorage.setItem("first_name", res.first_name);
     localStorage.setItem("type", res.account_type);
     localStorage.setItem("userData", JSON.stringify(res));


     // var x = localStorage.getItem("mytime");
     this.successAlert = true;
     if (this.name == '') {
       this.route.navigate(['edit_profile']);
     } else {
       this.route.navigate(['/dashboard']);
     }
   })


   this.successAlert = true;
   setTimeout(() => {
     this.successAlert = false;
   }, 2000);
   this.registerForm.resetForm();
 }


}





