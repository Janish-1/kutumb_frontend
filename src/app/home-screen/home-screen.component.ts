import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent implements OnInit {
  allPost: any;
  file: any;
  content: any;
  body: any;
  userId: any;
  selectType:any;
  userName:any;
  ngOnInit(): void {
    this.getAllPost();
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('first_name');
  }
  constructor(private apiService: ApiServiceService) { }
  getAllPost() {
    this.apiService.allPost().subscribe((res:any) => {
      // this.allPost = res;
      this.allPost = res.filter((r:any)=> r.category != 'ongoing' && r.category != 'previous')
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
 
  onFileSelected(event: any) {
    this.file  = event.target.files[0];
    console.log('Selected file:', this.file);
  }
  

  addPost() {
    if (!this.file) {
      console.error('No file selected for upload');
      return;
    }


    const formData = new FormData();
    formData.append('photo', this.file, this.file.name)
    formData.append('content', this.content);
    formData.append('category', this.selectType);
    formData.append('name', this.userName);
    formData.append('user', this.userId);
    formData.append('active', '1');

    this.apiService.addPost(this.userId, formData).subscribe((res) => {
      console.log('Post added successfully:', res);
      this.content = null;
      this.file = null;
      this.selectType = null;
      this.getAllPost();
    }, (error) => {
      console.error('Error adding post:', error);
    });
  }

}

