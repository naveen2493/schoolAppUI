import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancePageRoutingModule } from './performance-routing.module';

import { PerformancePage } from './performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformancePageRoutingModule
  ],
  declarations: [PerformancePage]
})
export class PerformancePageModule {}
