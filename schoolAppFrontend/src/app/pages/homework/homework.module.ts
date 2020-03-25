import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeworkPage } from './homework.page';

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalendarModule,
    RouterModule.forChild([{ path: '', component: HomeworkPage }])
    ],
  declarations: [HomeworkPage]
})
export class HomeworkPageModule {}
