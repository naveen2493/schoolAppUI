import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportCardPage } from './report-card.page';

const routes: Routes = [
  {
    path: '',
    component: ReportCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportCardPageRoutingModule {}
