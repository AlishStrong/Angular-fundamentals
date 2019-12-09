import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .pad-left { margin-left: 10px;}
    .well div { color: red; }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;

  someProperty: any = 'some value';

  logFoo() {
    console.log('foo');
  }
}
