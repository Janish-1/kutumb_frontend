import { Component } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-modala',
  templateUrl: './modala.component.html',
  styleUrl: './modala.component.css'
})

export class ModalaComponent {
  file: any;

  constructor(private apiService: ApiServiceService,private route: ActivatedRoute, public modalRef: MdbModalRef<ModalaComponent>) { 
    this.prefillContent();
   }

  formData: any = {
    name: '',
    content: '',
    category: null,
    photo: null,
    likes: 0,
    comments_count: 0,
    active: true,
    is_approved: false,
    addeddateTime: new Date().toISOString(), // Assuming you want current date and time
    addnpic: null,
    update: '',
    addnpic1: null,
    update1: '',
    addnpic2: null,
    update2: ''
  };

  prefillContent() {
    // Extract postId from the URL
    this.route.params.subscribe(params => {
      const postId = localStorage.getItem('currentPost');
      if (!postId) {
        console.error('Post ID not found in URL');
        return;
      }

      // Make a get request to fetch post data
      this.apiService.getpost(postId).subscribe(
        (postResponse: any) => {
          // Assuming postResponse contains the post data
          this.formData.name = postResponse.name;
          this.formData.content = postResponse.content;
          this.formData.category = postResponse.category;
          this.formData.photo = apiUrl + postResponse.photo;
          this.formData.likes = postResponse.likes;
          this.formData.comments_count = postResponse.comments_count;
          this.formData.active = postResponse.active;
          this.formData.is_approved = postResponse.is_approved;
          this.formData.addeddateTime = postResponse.addeddateTime;
          this.formData.addnpic = apiUrl + postResponse.addnpic;
          this.formData.update = postResponse.update;
          this.formData.addnpic1 = apiUrl + postResponse.addnpic1;
          this.formData.update1 = postResponse.update1;
          this.formData.addnpic2 = apiUrl + postResponse.addnpic2;
          this.formData.update2 = postResponse.update2;
        },
        (error) => {
          console.error('Error fetching post data:', error);
          // Handle error
        }
      );
    });
  }

onFileSelected(event: any, field: string) {
  const file = event.target.files[0];
  if (file) {
    switch (field) {
      case 'photo':
        this.formData.photo = file;
        break;
      case 'addnpic':
        this.formData.addnpic = file;
        break;
      case 'addnpic1':
        this.formData.addnpic1 = file;
        break;
      case 'addnpic2':
        this.formData.addnpic2 = file;
        break;
      default:
        console.error('Invalid field:', field);
    }
  }
}

  updateNow() {
    const postId = localStorage.getItem('currentPost');
    if (!postId) {
      console.error('Post ID not found in localStorage');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('content', this.formData.content);
    formData.append('is_approved', this.formData.is_approved.toString());
  
    if (this.formData.photo instanceof File) {
      formData.append('photo', this.formData.photo, this.formData.photo.name);
    }
  
    if (this.formData.addnpic instanceof File) {
      formData.append('addnpic', this.formData.addnpic, this.formData.addnpic.name);
    }
  
    formData.append('update', this.formData.update);
  
    if (this.formData.addnpic1 instanceof File) {
      formData.append('addnpic1', this.formData.addnpic1, this.formData.addnpic1.name);
    }
  
    formData.append('update1', this.formData.update1);
  
    if (this.formData.addnpic2 instanceof File) {
      formData.append('addnpic2', this.formData.addnpic2, this.formData.addnpic2.name);
    }
  
    formData.append('update2', this.formData.update2);
  
    this.apiService.updatepost(postId, formData).subscribe(
      response => {
        console.log('Updated successfully:', response);
        this.modalRef.close(); // Close the modal after successful submission
      },
      error => {
        console.error('Error updating:', error);
        // Handle error
      }
    );
  }  
}
