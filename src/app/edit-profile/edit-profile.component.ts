import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {
  @ViewChild('updateProfile') updateProfile!: NgForm;
  fname: any;
  email: any;
  contact: any;
  dob: any;
  userId: any;
  userData: any;
  userDataObj: any;
  first_name: any;
  type: any;
  blood_group: any;
  adhaar: any;
  batch: any;
  batalian: any;
  labelValue: any;
  panNo: any;
  awards: any;
  other: any;
  successAlert: any = false;
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.userData = localStorage.getItem('userData');
    this.userDataObj = JSON.parse(this.userData);
    this.type = localStorage.getItem('type');
    this.fname = this.userDataObj.first_name
    this.email = this.userDataObj.email,
      this.contact = this.userDataObj.mobileno,
      this.dob = this.userDataObj.dob
    this.blood_group = this.userDataObj.blood_group
    this.adhaar = this.userDataObj.adhaar
    this.panNo = this.userDataObj.pan_number
    this.awards = this.userDataObj.awards
    this.batalian = this.userDataObj.batalian
    this.batch = this.userDataObj.batch


    if (this.type == '1') {
      this.blood_group = '',
        this.adhaar = ''
    } else if (this.type == '2') {
      this.adhaar = ''
    } else if (this.type == '3') {
      this.batch = '';
      this.batalian = '';
      this.awards = '',
        this.other = ''
    } else if (this.type == '4') {
      if (this.labelValue) {
        this.panNo = ''
      }
    }
  }
  constructor(private apiService: ApiServiceService, private route: Router) { }

  update() {
    let data = {
      first_name: this.fname,
      email: this.email,
      mobileno: this.contact,
      dob: this.dob,
      batch: this.batch,
      adhaar: this.adhaar,
      blood_group: this.blood_group,
      batalian: this.batalian,
      awards: this.awards,
      panNo: this.panNo
    }
    this.apiService.updateProfile(this.userId, data).subscribe((res) => {
      console.log('Profile updated successfully');
      this.successAlert = true;
      this.userDataObj.first_name = this.fname
      this.userDataObj.email = this.email
      this.userDataObj.mobileno = this.contact
      this.userDataObj.dob = this.dob
      localStorage.setItem('userData', JSON.stringify(this.userDataObj))
      localStorage.setItem('userEmail', this.email)
      localStorage.setItem('first_name', this.fname)
      // localStorage.setItem('first_name', )
      this.route.navigate(['/dashboard']);
    },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
    this.successAlert = true;
    setTimeout(() => {
      this.successAlert = false;
    }, 2000);
  }
}

