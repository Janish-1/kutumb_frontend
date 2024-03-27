import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { CelebmodalComponent } from '../celebmodal/celebmodal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrl: './celebration.component.css'
})
export class CelebrationComponent implements OnInit{
  celebrationData:any;
  modalRef: MdbModalRef<CelebmodalComponent> | null = null;
  ngOnInit(): void {
      this.apiService.celebration().subscribe((res)=>{
       this.celebrationData = res;
      })
  }
  constructor(private apiService:ApiServiceService,private modalService: MdbModalService){}

  submitCelebration() {
    // Handle form submission
    // You can perform any necessary actions here, such as sending the donation data to the server
    console.log('Donation submitted!');
  }
  
  openModal() {
    this.modalRef = this.modalService.open(CelebmodalComponent)
  }

}

