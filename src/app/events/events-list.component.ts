import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

declare let toastr;
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    toastr.success(eventName);
  }
}
