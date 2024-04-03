import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-celebmodal',
  templateUrl: './celebmodal.component.html',
  styleUrl: './celebmodal.component.css'
})

export class CelebmodalComponent implements OnInit {
  donationData: any;
  formData: any = {
    name: '',
    icon: null,
    amount: 0
  };

  constructor(private apiService: ApiServiceService, public modalRef: MdbModalRef<CelebmodalComponent>) { }

  ngOnInit(): void {
    this.apiService.donations().subscribe((res) => {
      this.donationData = res;
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.icon = file; // Update formData with the selected file
  }

  celebrateFun() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('order_by', userId);
    formData.append('amount', this.formData.amount.toString()); // Ensure amount is converted to string
    formData.append('type', 'celebration');

    if (this.formData.icon instanceof File) {
      formData.append('icon', this.formData.icon, this.formData.icon.name);
      
      this.apiService.donateNow(formData).subscribe(response => {
        console.log('Action created successfully:', response);
        this.modalRef.close(); // Close the modal after successful submission
      }, error => {
        console.error('Error creating action:', error);
        // Handle error
      });
    } else {
      console.error('No valid file selected for icon');
    }
  }

}
