import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})

export class AllusersComponent implements OnInit {
  allUsers: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  userId: any;
  followedUsers: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getAllUsers();
    this.getFollowingList(this.userId);
  }

  getAllUsers() {
    this.apiService.allusers().subscribe(
      (users: any) => {
        this.allUsers = users;
        this.filterUsers(); // Initial filtering
        console.log('All Users:', this.allUsers);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  filterUsers() {
    this.filteredUsers = this.allUsers.filter(user => 
      user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getFollowingList(userId: number) {
    this.apiService.getFollowingList(userId).subscribe((data: any) => {
      this.followedUsers = data.following_users.map((user: any) => user.id);
      console.log("Folllowed Users: ",this.followedUsers);
    });
  }

  isFollowed(userId: any): boolean {
    return this.followedUsers.includes(userId);
  }

  followUser(userToFollowId: number, followerId: number) {
    this.apiService.followUser(userToFollowId, followerId).subscribe(
      (response) => {
        console.log('User followed successfully:', response);
        // After following, refresh the user list to reflect changes
        this.getAllUsers();
      },
      (error) => {
        console.error('Error following user:', error);
        // Handle error
      }
    );
  }
}
