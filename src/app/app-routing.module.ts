import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DonationComponent } from './donation/donation.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'user_profile',
    component: UserProfileComponent
  },
  {
    path:'edit_profile',
    component: EditProfileComponent
  },
  {
    path:'donation',
    component:DonationComponent
  },
  {
    path:'celebration',
    component: CelebrationComponent
  },
  {
    path:'become_member',
    component:BecomeMemberComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'welcome',
    component: WelcomeScreenComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'dashboard_header',
    component: DashboardHeaderComponent
  },
  {
    path:'blog',
    component:HomeScreenComponent
  },
  {
    
    path:'forget_password',
    component: ForgetPasswordComponent
  },
  {
    
    path:'verify',
    component: VerifyOtpComponent
  },
  {
    
    path:'changePassword',
    component: ChangePasswordComponent
  },
  {
   path:'notification',
   component:NotificationComponent
  },
  {
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
