import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationComponent } from './donation/donation.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { HomeComponent } from './home/home.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { HeaderComponent } from './header/header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegisterVerifyComponent } from './register-verify/register-verify.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component'; //
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WelcomeScreenComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DonationComponent,
    CelebrationComponent,
    HomeComponent,
    HomeScreenComponent,
    EditProfileComponent,
    UserProfileComponent,
    BecomeMemberComponent,
    HeaderComponent,
    DashboardHeaderComponent,
    FooterComponent,
    ForgetPasswordComponent,
    VerifyOtpComponent,
    ChangePasswordComponent,
    RegisterVerifyComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
