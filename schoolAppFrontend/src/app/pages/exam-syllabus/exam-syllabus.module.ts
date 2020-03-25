import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamSyllabusPageRoutingModule } from './exam-syllabus-routing.module';

import { ExamSyllabusPage } from './exam-syllabus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamSyllabusPageRoutingModule
  ],
  declarations: [ExamSyllabusPage]
})
export class ExamSyllabusPageModule {}
