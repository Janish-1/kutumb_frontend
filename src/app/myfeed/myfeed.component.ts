import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-myfeed',
  templateUrl: './myfeed.component.html',
  styleUrls: ['./myfeed.component.css'] // corrected property name to styleUrls
})
export class MyfeedComponent implements OnInit {
  allPost: any;
  apiUrl: any;
  userName: any;
  userId: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllPost();
    this.userName = localStorage.getItem('first_name');
    this.apiUrl = apiUrl;
  }

  getAllPost() {
    this.userId = localStorage.getItem('userId');
    this.apiService.getfollowingPost(this.userId).subscribe((res:any) => {
      this.allPost = res.following_posts;
    });
  }

  toggleLike(post: any) {
    if (post.liked) {
      this.apiService.unlikePost(post.id).subscribe(() => {
        post.liked = false;
        post.likes--;
      });
    } else {
      this.apiService.likePost(post.id).subscribe(() => {
        post.liked = true;
        post.likes++;
      });
    }
  }

  followUser(userToFollowId: number, followerId: number) {
    this.apiService.followUser(userToFollowId, followerId).subscribe(
      (response) => {
        console.log('User followed successfully:', response);
        // Handle success
      },
      (error) => {
        console.error('Error following user:', error);
        // Handle error
      }
    );
  }
}
