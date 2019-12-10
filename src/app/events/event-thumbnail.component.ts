import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .green { color: green !important; }
  .bold { font-weight: bold; }
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
  .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;

  someProperty: any = 'some value';

  logFoo() {
    console.log('foo');
  }

  getStatTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    } else {
      return '';
    }
  }
}
