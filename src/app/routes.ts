import { Routes } from '@angular/router';
import { EventListComponent } from './events/events-list-component';
import { from } from 'rxjs';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventRouterActivator } from './events/event-details/event.router.activator.service';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './events/event-list-resolver.service';


export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventListComponent, resolve: { events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
