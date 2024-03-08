import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent implements OnInit{
  fname:any;
  ngOnInit(): void {
    this.fname = localStorage.getItem('first_name');
  }

}
