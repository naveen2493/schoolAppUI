import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendencePage } from './attendence.page';

const routes: Routes = [
  {
    path: '',
    component: AttendencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendencePageRoutingModule {}
