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
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CelebmodalComponent } from './celebmodal/celebmodal.component';
import { OtpComponent } from './otp/otp.component';
import { VerifyloginotpComponent } from './verifyloginotp/verifyloginotp.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { ModalaComponent } from './modala/modala.component';
import { MyfeedComponent } from './myfeed/myfeed.component'; //
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
    NotificationComponent,
    ModalComponent,
    CelebmodalComponent,
    OtpComponent,
    VerifyloginotpComponent,
    ProjectdetailsComponent,
    ModalaComponent,
    MyfeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
