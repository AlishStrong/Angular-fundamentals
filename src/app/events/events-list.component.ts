import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      events => this.events = events
    );
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
