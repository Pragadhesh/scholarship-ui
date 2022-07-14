import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScholarshipsRoutingModule } from './scholarships-routing.module';
import { ScholarshipsComponent } from './scholarships.component';
import { ScholarshipCardModule } from './scholarship-card/scholarship-card.module';


@NgModule({
  declarations: [
    ScholarshipsComponent
  ],
  imports: [
    CommonModule,
    ScholarshipsRoutingModule,
    ScholarshipCardModule
  ],
  exports:[
    ScholarshipsComponent
  ]
})
export class ScholarshipsModule { }
