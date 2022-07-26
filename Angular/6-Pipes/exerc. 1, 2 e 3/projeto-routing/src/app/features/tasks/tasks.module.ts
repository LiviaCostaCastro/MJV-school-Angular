import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskslistComponent } from './components/taskslist/taskslist.component';
import { TasksComponent } from './pages/tasks/tasks.component';



@NgModule({
  declarations: [
    TasksComponent,
    TaskslistComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TasksComponent,
    TaskslistComponent
  ]
})
export class TasksModule { }
