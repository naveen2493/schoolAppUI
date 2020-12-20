import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EventsNewsService } from '../../services/events-news.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss'],
})
export class EventsPageComponent implements OnInit {
  panelOpenState = false;
  eventsData = [];
  constructor(public eventsNewsService: EventsNewsService, public router: Router) { }

  ngOnInit() {
    // Service Response
    this.eventsNewsService.get().subscribe(
      res => {
        // debugger;
        this.eventsData = res.eventsData;
      },
      err => {
        console.log("Errors", err);
      }
    );

      }

  openEventDetails(event) {
    let selectedEvent: NavigationExtras = {
      state: {
        event: event
      }
    };
    this.router.navigate(['/events-details'], selectedEvent);
  }

}
