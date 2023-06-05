import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-routing.module';
import { SharedModule } from '../../../../shared/modules/shared.module';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    SharedModule,
    CommonModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
