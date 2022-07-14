import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScholarshipsModule } from './modules/scholarships/scholarships.module';
import { HomepageModule } from './modules/homepage/homepage.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    ScholarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
