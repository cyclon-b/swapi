import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { provideState } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';
import { peopleStoreFeature } from './components/people-list/store/people-store.reducer';
import { PeopleStoreEffects } from './components/people-list/store/people-store.effects';
import { peopleResolver } from './utils/resolvers/people.resolver';
import { SinglePersonComponent } from './components/single-person/single-person.component';
import { singlePersonStoreFeature } from './components/single-person/store/single-person-store.reducer';
import { SinglePersonStoreEffects } from './components/single-person/store/single-person-store.effects';
import { singlePersonResolver } from './utils/resolvers/single-person.resolver';

export const peopleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'page/:id',
        component: PeopleListComponent,
        providers: [
          provideState(peopleStoreFeature),
          provideEffects([PeopleStoreEffects]),
        ],
        resolve: {
          peopleList: peopleResolver,
        },
      },
    ],
  },

  {
    path: 'single-person/:url',
    component: SinglePersonComponent,
    providers: [
      provideState(singlePersonStoreFeature),
      provideEffects([SinglePersonStoreEffects]),
    ],
    resolve: {
      singlePerson: singlePersonResolver,
    },
  },
];
