import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateActionComponent } from './create-action/create-action.component';
import { ActionComponent } from './action/action.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationService } from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { ActionDetailsComponent } from './action-details/action-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateActionComponent,
    ActionComponent,
    ProfileComponent,
    SignUpComponent,
    LoginComponent,
    ActionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  

  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
    ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
