import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcollaboratorsComponent } from './components/listcollaborators/listcollaborators.component';



@NgModule({
  declarations: [
    ListcollaboratorsComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ListcollaboratorsComponent
  ]
})
export class FeaturesCollaboratorsModule { }
