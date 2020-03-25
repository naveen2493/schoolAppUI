import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportCardPageRoutingModule } from './report-card-routing.module';

import { ReportCardPage } from './report-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportCardPageRoutingModule
  ],
  declarations: [ReportCardPage]
})
export class ReportCardPageModule {}
