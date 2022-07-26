import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    RegisterComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    UserComponent,
    RegisterComponent
  ]
})
export class RegisterModule { }
