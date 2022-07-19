import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScholarshipsModule } from './modules/scholarships/scholarships.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';
import { EmbeddedSigningModule } from './modules/embedded-signing/embedded-signing.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomepageModule,
    ScholarshipsModule,
    AdminModule,
    EmbeddedSigningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
