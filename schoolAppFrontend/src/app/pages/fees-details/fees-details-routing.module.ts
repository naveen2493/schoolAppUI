import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesDetailsPage } from './fees-details.page';

const routes: Routes = [
  {
    path: '',
    component: FeesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesDetailsPageRoutingModule {}
