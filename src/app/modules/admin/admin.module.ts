import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ScholarshipCardModule } from '../scholarships/scholarship-card/scholarship-card.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ScholarshipCardModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
