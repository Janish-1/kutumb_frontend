import { Component,OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  donationData: any;
  formData: any = {
    name: '',
    icon: '',
    amount: 0
  };
  ngOnInit(): void {
    this.apiService.donations().subscribe((res) => {
      this.donationData = res;
    })
    console.log(this.donationData)
  }

  constructor(private apiService:ApiServiceService,public modalRef: MdbModalRef<ModalComponent>) { }

  donateNow() {
    const data = {
      name: this.formData.name,
      icon: this.formData.icon,
      order_by: localStorage.getItem('userId'), // Provide the appropriate value
      amount: this.formData.amount,
      type: 'donation',
    };

    this.apiService.donateNow(data).subscribe(response => {
      console.log('Action created successfully:', response);
      // Handle response as needed
    }, error => {
      console.error('Error creating action:', error);
      // Handle error
    });
  }

}
