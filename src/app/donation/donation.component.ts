import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent implements OnInit{
  donationData:any;
  apiUrl:any;
  modalRef: MdbModalRef<ModalComponent> | null = null;
  ngOnInit(): void {
    this.apiUrl = apiUrl;
      this.apiService.donations().subscribe((res)=>{
       this.donationData = res;
      })
      console.log(this.donationData)
  }
  constructor(private apiService:ApiServiceService,private modalService: MdbModalService){}

  submitDonation() {
    // Handle form submission
    // You can perform any necessary actions here, such as sending the donation data to the server
    console.log('Donation submitted!');
  }
  
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }
}
