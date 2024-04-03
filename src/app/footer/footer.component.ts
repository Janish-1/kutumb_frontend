import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.userName = localStorage.getItem('first_name');
    this.type = localStorage.getItem('type');
    if(this.type == 2){
     this.iconPlus = true;
    }
    
  }
  constructor(private apiService:ApiServiceService) { }
  file: any;
  allPost: any;
  content: any;
  body: any;
  userId: any;
  selectType:any;
  userName:any;
  type:any;
  iconPlus:any = false;
  onFileSelected(event: any) {
    this.file = event.target.files[0];
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

    this.apiService.addPost(this.userId, formData).subscribe((res:any) => {
      console.log('Post added successfully:', res);
      this.content = '';
      this.file = '';
      this.selectType = '';
    }, (error) => {
      console.error('Error adding post:', error);
    });
  }
}
