import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ScholarshipCardModule } from '../scholarships/scholarship-card/scholarship-card.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ScholarshipCardModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
