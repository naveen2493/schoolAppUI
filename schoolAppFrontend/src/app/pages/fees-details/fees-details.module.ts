import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeesDetailsPageRoutingModule } from './fees-details-routing.module';

import { FeesDetailsPage } from './fees-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesDetailsPageRoutingModule
  ],
  declarations: [FeesDetailsPage]
})
export class FeesDetailsPageModule {}
