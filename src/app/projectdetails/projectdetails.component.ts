import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalaComponent } from '../modala/modala.component';
import { ModalComponent } from '../modal/modal.component';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrl: './projectdetails.component.css'
})
export class ProjectdetailsComponent implements OnInit {
  donation: any;
  celebration: any;
  fname: any;
  type: any;
  apiUrl:any;
  memberBtn: any = false;
  posts: any;
  userId: any;
  modalRef: MdbModalRef<ModalaComponent> | null = null;
  modal1Ref: MdbModalRef<ModalComponent> | null = null;
  constructor(private apiService: ApiServiceService,private route: ActivatedRoute,private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.apiService.isAuthenticated();
    this.userId = localStorage.getItem('userId');
    this.fname = localStorage.getItem('first_name');
    this.type = localStorage.getItem('type');
    this.apiUrl = apiUrl;
  
    // Get the project ID from the URL
    this.route.params.subscribe((params: { [x: string]: any; }) => {
      const projectId = params['id']; // Assuming your route parameter name is 'id'
      localStorage.setItem("currentPost",projectId);
      // Fetch only the project with the specified ID
      if (projectId) {
        this.apiService.allPost().subscribe((res: any) => {
          this.posts = res.filter((r: any) => r.id == projectId);
        });
      }
    });
  
    this.apiService.donations().subscribe((res) => {
      this.donation = res;
    });
  
    this.apiService.celebration().subscribe((res) => {
      this.celebration = res;
    });
    
    if (this.type != 2) {
      this.memberBtn = true;
    }
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalaComponent)
  }
  opendonateModal() {
    this.modal1Ref = this.modalService.open(ModalComponent)
  }
}
