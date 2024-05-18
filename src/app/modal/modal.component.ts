import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  donationData: any;
  panNo1: any;
  panNo: any;
  amount: any;
  tax_benefit: any;
  userData: any;
  formData: any = {
    name: '',
    amount: 0,
    email: '',
  };

  constructor(private apiService: ApiServiceService, public modalRef: MdbModalRef<ModalComponent>) { }

  ngOnInit(): void {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
      // Populate formData with user data
      this.formData.name = this.userData.username || '';
      this.formData.email = this.userData.email || '';
    } else {
      console.error('User data not found in localStorage');
    }

    this.apiService.donations().subscribe((res) => {
      this.donationData = res;
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.icon = file; // Update formData with the selected file
  }

  donateNow() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('order_by', userId);
    formData.append('amount', this.formData.amount.toString()); // Ensure amount is converted to string
    formData.append('type', 'donation');
    formData.append('email', this.formData.email);

    this.apiService.donateNow(formData).subscribe(response => {
      console.log('Action created successfully:', response);
      this.modalRef.close(); // Close the modal after successful submission
    }, error => {
      console.error('Error creating action:', error);
      // Handle error
    });
  }
}
