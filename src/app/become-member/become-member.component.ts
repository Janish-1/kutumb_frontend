import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-become-member',
  templateUrl: './become-member.component.html',
  styleUrls: ['./become-member.component.css']
})

export class BecomeMemberComponent {
  name: string = '';
  address: string = '';
  phone: string = '';
  password: string = '';
  email: string | null = localStorage.getItem('userEmail');
  userId: string | null = localStorage.getItem('userId');

  constructor(private apiService: ApiServiceService, private router: Router) { }

  addMember(): void {
    if (!this.email || !this.userId) {
      console.error('User email or user ID not found.');
      return;
    }

    const formData = {
      email: this.email,
      username: this.name,
      address: this.address,
      phone: this.phone,
      password: this.password,
      account_type: '2'
    };

    this.apiService.becomeMember(this.userId, formData).subscribe(
      response => {
        console.log('Member Updated', response);
        this.router.navigate(['/dashboard']); // Navigate to home page
      },
      error => {
        console.error('Error creating member:', error);
      }
    );
  }
}
