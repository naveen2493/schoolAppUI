import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeachersDetailsPageRoutingModule } from './teachers-details-routing.module';

import { TeachersDetailsPage } from './teachers-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeachersDetailsPageRoutingModule
  ],
  declarations: [TeachersDetailsPage]
})
export class TeachersDetailsPageModule {}
