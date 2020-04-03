import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersDetailsPage } from './teachers-details.page';

const routes: Routes = [
  {
    path: '',
    component: TeachersDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersDetailsPageRoutingModule {}
