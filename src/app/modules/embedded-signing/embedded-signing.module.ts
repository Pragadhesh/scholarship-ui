import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedSigningComponent } from './embedded-signing.component';



@NgModule({
  declarations: [
    EmbeddedSigningComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmbeddedSigningComponent
  ]
})
export class EmbeddedSigningModule { }
