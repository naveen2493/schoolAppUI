import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeworkDetailsPageRoutingModule } from './homework-details-routing.module';

import { HomeworkDetailsPage } from './homework-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeworkDetailsPageRoutingModule
  ],
  declarations: [HomeworkDetailsPage]
})
export class HomeworkDetailsPageModule {}
