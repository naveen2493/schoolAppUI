import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsDetailsPageRoutingModule } from './events-details-routing.module';

import { EventsDetailsPage } from './events-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsDetailsPageRoutingModule
  ],
  declarations: [EventsDetailsPage]
})
export class EventsDetailsPageModule {}
