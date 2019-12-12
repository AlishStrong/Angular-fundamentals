import { Routes } from '@angular/router';
import { Error404Component } from './errors/error404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventsListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
