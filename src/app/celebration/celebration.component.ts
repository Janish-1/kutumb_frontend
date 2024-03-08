import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrl: './celebration.component.css'
})
export class CelebrationComponent implements OnInit{
  celebrationData:any;
  ngOnInit(): void {
      this.apiService.celebration().subscribe((res)=>{
       this.celebrationData = res;
      })
  }
  constructor(private apiService:ApiServiceService){}

}

