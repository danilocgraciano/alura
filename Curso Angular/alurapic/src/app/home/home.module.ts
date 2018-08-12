import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { UserNotTakenValidatorService } from './signup/user-not-taken.validator.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ],
  declarations: [SigninComponent, SignupComponent],
  providers: [SignupService, UserNotTakenValidatorService]
})
export class HomeModule { }
