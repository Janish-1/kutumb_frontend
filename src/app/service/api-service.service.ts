import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  url: any = `${apiUrl}/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
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

  sendOtp(data: any){
    return this.http.post(this.url + 'sendemail/',data,{ headers: this.headers });
  }

  verifyOtp(data: any) {
    return this.http.post(this.url + 'otp-verify/', data, { headers: this.headers });
  }

  verifyloginOtp(data: any) {
    return this.http.post(this.url + 'verifyloginotp/', data, { headers: this.headers });
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

  followUser(userToFollowId: number, followerId: number): Observable<any> {
    const data = { user_id: userToFollowId, follower_id: followerId };
    return this.http.post<any>(`${this.url}follow-user/`, data, { headers: this.headers });
  }

  getFollowingList(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}follower-following/${userId}`);
  }

  getfollowingPost(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}following-post/${userId}`);
  }

  post(postId: any) {
    return this.http.post<any>(`${this.url}posts/${postId}/`, {});
  }

  getpost(postId: any) {
    return this.http.get<any>(`${this.url}getspecposts/${postId}/`, {});
  }

  updatepost(postId: any, formData: FormData) {
    return this.http.patch<any>(`${this.url}posts/${postId}/`, formData);
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

  donateNow(data:any) {
    return this.http.post(`${this.url}action/`,data);
  }

  celebrateFun(data: any){
    return this.http.post(`${this.url}action/`,data);
  }

  becomeMember(id: any,data: any){
    return this.http.patch(`${this.url}users/${id}/`,data);
  }

  allusers(){
    return this.http.get(`${this.url}users/`);
  }
}