import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

export const rootRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./view/people/people.routes').then(m => m.peopleRoutes),
  },
  {
    path: 'planet',
    loadChildren: () =>
      import('./view/planet/planet.routes').then(m => m.planetRoutes),
  },
  {
    path: 'starship',
    loadChildren: () =>
      import('./view/starship/starship.routes').then(m => m.starshipRoutes),
  },
];
