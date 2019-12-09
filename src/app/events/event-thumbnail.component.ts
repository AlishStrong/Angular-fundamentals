import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
}
