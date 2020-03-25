import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamSyllabusPage } from './exam-syllabus.page';

const routes: Routes = [
  {
    path: '',
    component: ExamSyllabusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamSyllabusPageRoutingModule {}
