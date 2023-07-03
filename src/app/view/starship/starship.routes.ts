import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { SingleStarshipComponent } from './components/single-starship/single-starship.component';
import { singleStarshipStoreFeature } from './components/single-starship/store/single-starship-store.reducer';
import { SingleStarshipStoreEffects } from './components/single-starship/store/single-starship-store.effects';
import { StarshipListStoreEffects } from './components/starship-list/store/starship-list-store.effects';
import { starshipListStoreFeature } from './components/starship-list/store/starship-list-store.reducer';
import { starshipListResolver } from './utils/starship-list.resolver';
import { singleStarshipResolver } from './utils/single-starship.resolver';

export const starshipRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'page/:id',
        component: StarshipListComponent,
        providers: [
          provideState(starshipListStoreFeature),
          provideEffects([StarshipListStoreEffects]),
        ],
        resolve: {
          planetList: starshipListResolver,
        },
      },
    ],
  },
  {
    path: 'single-starship/:url',
    component: SingleStarshipComponent,
    providers: [
      provideState(singleStarshipStoreFeature),
      provideEffects([SingleStarshipStoreEffects]),
    ],
    resolve: {
      singlePlanet: singleStarshipResolver,
    },
  },
];
