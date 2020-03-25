import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformancePage } from './performance.page';

const routes: Routes = [
  {
    path: '',
    component: PerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformancePageRoutingModule {}
