import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScolarshipsRoutingModule } from './scolarships-routing.module';
import { ScolarshipsComponent } from './scolarships.component';


@NgModule({
  declarations: [
    ScolarshipsComponent
  ],
  imports: [
    CommonModule,
    ScolarshipsRoutingModule
  ]
})
export class ScolarshipsModule { }
