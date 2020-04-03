import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSchoolPageRoutingModule } from './about-school-routing.module';

import { AboutSchoolPage } from './about-school.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSchoolPageRoutingModule
  ],
  declarations: [AboutSchoolPage]
})
export class AboutSchoolPageModule {}
