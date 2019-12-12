import { Routes } from '@angular/router';
import { Error404Component } from './errors/error404.component';
import { CreateEventComponent, EventDetailsComponent, EventListResolver, EventRouteActivator, EventsListComponent } from './events/index';

export const appRoutes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
