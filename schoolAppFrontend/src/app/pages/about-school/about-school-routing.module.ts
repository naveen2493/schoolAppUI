import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSchoolPage } from './about-school.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSchoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSchoolPageRoutingModule {}
