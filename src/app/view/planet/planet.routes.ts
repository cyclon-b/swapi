import { Routes } from '@angular/router';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { provideState } from '@ngrx/store';
import { planetListStoreFeature } from './components/planet-list/store/planet-list-store.reducer';
import { provideEffects } from '@ngrx/effects';
import { PlanetListStoreEffects } from './components/planet-list/store/planet-list-store.effects';
import { planetListResolver } from './utils/planet-list.resolver';
import { SinglePlanetComponent } from './components/single-planet/single-planet.component';
import { singlePlanetFeature } from './components/single-planet/store/single-planet-store.reducer';
import { SinglePlanetStoreEffects } from './components/single-planet/store/single-planet-store.effects';
import { singlePlanetResolver } from './utils/single-planet.resolver';

export const planetRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'page/:id',
        component: PlanetListComponent,
        providers: [
          provideState(planetListStoreFeature),
          provideEffects([PlanetListStoreEffects]),
        ],
        resolve: {
          planetList: planetListResolver,
        },
      },
    ],
  },
  {
    path: 'single-planet/:url',
    component: SinglePlanetComponent,
    providers: [
      provideState(singlePlanetFeature),
      provideEffects([SinglePlanetStoreEffects]),
    ],
    resolve: {
      singlePlanet: singlePlanetResolver,
    },
  },
];
