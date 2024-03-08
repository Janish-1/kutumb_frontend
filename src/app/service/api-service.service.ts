import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: any = "http://kutumb.itpandit.in/";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient, private route:Router) { }

  register(data: any): Observable<any> {
    return this.http.post(this.url + 'users/', data, { headers: this.headers });
  }

  getRegisterData(id:any = '') {
    if(id){
      id+="/";
    }
    return this.http.get(this.url + 'users/'+id, { headers: this.headers });
  }

  checkEmail(email: any): Observable<any> {
    return this.http.post(this.url + 'users/', email, { headers: this.headers });
  }

  login(data: any) {
    return this.http.post(this.url + 'login/', data, { headers: this.headers });
  }

  donations() {
    return this.http.get(this.url + 'donations/', { headers: this.headers });
  }

  celebration() {
    return this.http.get(this.url + 'celebrations/', { headers: this.headers });
  }


  allPost() {
    return this.http.get(this.url + 'posts/', { headers: this.headers })
  }

  forgetPassword(data: any) {
    return this.http.post(this.url + 'forgot-password/', data, { headers: this.headers });
  }

  verifyOtp(data: any) {
    return this.http.post(this.url + 'otp-verify/', data, { headers: this.headers });
  }

  changePassword(data: any) {
    return this.http.post(this.url + 'change-password/', data, { headers: this.headers });
  }

  likePost(postId: number): Observable<any> {
    return this.http.post<any>(`${this.url}like/${postId}/`, {});
  }

  unlikePost(postId: number): Observable<any> {
    return this.http.post<any>(`${this.url}unlike/${postId}/`, {});
  }

  post(postId: any) {
    return this.http.post<any>(`${this.url}posts/${postId}/`, {});
  }

  isAuthenticated() {
    if (localStorage.getItem('userId') && localStorage.getItem('userData')) {
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }

  getUserData(){
    let data:any = localStorage.getItem('userData');
    return JSON.parse(data);
  }

  updateProfile(id: any = '', data: any): Observable<any> {
    if(id){
      id+="/";
    }
    return this.http.patch(`${this.url}users/${id}`, data , { headers: this.headers });
  }

  addPost(id:any, data:any){
   return this.http.post(`${this.url}posts/`, data);
  }

  gallery(id:any, data:any){
    if(id){
      id+="/";
    }
    return this.http.post(`${this.url}gallery/${id}`, data,{ headers: this.headers });
  }
}
