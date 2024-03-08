import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  donation: any;
  celebration: any;
  fname: any;
  type: any;
  memberBtn: any = false;
  ngOnInit(): void {
    this.apiService.isAuthenticated();
    this.getAllPost();
    this.userId = localStorage.getItem('userId');
    this.fname = localStorage.getItem('first_name');
    this.type = localStorage.getItem('type');
    this.apiService.donations().subscribe((res) => {
      this.donation = res;
    })

    this.apiService.celebration().subscribe((res) => {
      this.celebration = res;
    })
    
    if (this.type != 2) {
      this.memberBtn = true;
    }
  }
  ongoingPost: any;
  previousPost: any;
  allPost: any;
  file: any;
  content: any;
  body: any;
  userId: any;

  getAllPost() {
    this.apiService.allPost().subscribe((res: any) => {
      // this.allPost = res;
      this.previousPost = res.filter((r: any) => r.category == 'previous')
      this.ongoingPost = res.filter((r: any) => r.category == 'ongoing')
    })
  }

  toggleLike(post: any) {
    if (post.liked) {
      this.apiService.unlikePost(post.id).subscribe(() => {
        post.liked = false;
        post.likes--;
      })
    } else {
      this.apiService.likePost(post.id).subscribe(() => {
        post.liked = true;
        post.likes++;
      });
    }
  }

  constructor(private apiService: ApiServiceService) { }
}
