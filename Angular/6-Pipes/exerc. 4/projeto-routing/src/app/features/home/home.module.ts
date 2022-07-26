import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from '../login/pages/login/login.component';
import { RegisterComponent } from '../register/pages/register/register.component';
import { RegisterModule } from '../register/register.module';
import { UserComponent } from '../register/components/user/user.component';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterModule,
    ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule { }
