import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamDatesPage } from './exam-dates.page';

const routes: Routes = [
  {
    path: '',
    component: ExamDatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamDatesPageRoutingModule {}
