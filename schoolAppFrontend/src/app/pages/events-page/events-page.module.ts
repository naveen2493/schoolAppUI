import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EventsPageComponent } from './events-page.component';

@NgModule({
  
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EventsPageComponent }])
    ],
  declarations: [EventsPageComponent]
  
})
export class EventsPageModule { }
