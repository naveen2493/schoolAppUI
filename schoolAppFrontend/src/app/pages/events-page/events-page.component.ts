import { Component, OnInit } from '@angular/core';
import { EventsNewsService } from '../../services/events-news.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent implements OnInit {
  panelOpenState = false;
  eventData = [];
  constructor(public eventsNewsService: EventsNewsService) { }

  ngOnInit() {
    /*Service Response
    this.eventsNewsService.get(this.eventsNewsService.getParams()).subscribe(
      res => {
        this.eventData = res;
      },
      err => {
        console.log("Errors", err);
      }
    );*/

    // Mock Response
    let res = [
      {
        "event": "Diwali",
        "eventTiming": "9.00 AM to 12.00 PM",
        "eventDate": "12",
        "eventMonthYear": "Nov 2020",
        "eventType": "Events"
      }, {
        "event": "Pongal",
        "eventTiming": "9.00 AM to 12.00 PM",
        "eventDate": "14",
        "eventMonthYear": "Jan 2020",
        "eventType": "Events"
      },
      {
        "event": "TAMIL NEW YEAR",
        "eventTiming": "9.00 AM to 12.00 PM",
        "eventDate": "14",
        "eventMonthYear": "Apr 2020",
        "eventType": "Events"
      },
      {
        "event": "TOMORROW 3rd March 2020 (TUESDAY) WILL BE A HALF WORKING DAY FOR STUDENTS FROM JR.K.G TO GRADE XI",
        "eventTiming": "9.00 AM to 12.00 PM",
        "eventDate": "12",
        "eventMonthYear": "Apr 2020",
        "eventType": "NOTICE"
      }
    ];

    this.eventData = res;
  }

}
