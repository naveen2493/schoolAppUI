import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamDatesPageRoutingModule } from './exam-dates-routing.module';

import { ExamDatesPage } from './exam-dates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamDatesPageRoutingModule
  ],
  declarations: [ExamDatesPage]
})
export class ExamDatesPageModule {}
