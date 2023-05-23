import { Routes } from '@angular/router';

export const rootRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./view/home/home.component').then(m => m.HomeComponent),
  },
];
