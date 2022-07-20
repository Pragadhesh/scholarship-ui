import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { ScholarshipsComponent } from './modules/scholarships/scholarships.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'scholarships',
    component: ScholarshipsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
