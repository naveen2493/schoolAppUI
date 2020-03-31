import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyllabusDetailsPage } from './syllabus-details.page';

const routes: Routes = [
  {
    path: '',
    component: SyllabusDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyllabusDetailsPageRoutingModule {}
