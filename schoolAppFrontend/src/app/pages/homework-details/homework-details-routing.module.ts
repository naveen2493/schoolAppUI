import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeworkDetailsPage } from './homework-details.page';

const routes: Routes = [
  {
    path: '',
    component: HomeworkDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeworkDetailsPageRoutingModule {}
