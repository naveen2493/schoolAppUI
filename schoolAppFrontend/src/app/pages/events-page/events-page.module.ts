import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { EventsPageComponent } from './events-page.component';

@NgModule({
  
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MbscModule,
    RouterModule.forChild([{ path: '', component: EventsPageComponent }])
    ],
  declarations: [EventsPageComponent]
  
})
export class EventsPageModule { }
