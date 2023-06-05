import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { provideState } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';
import { peopleListStoreFeature } from './components/people-list/store/people-list-store.reducer';
import { PeopleListStoreEffects } from './components/people-list/store/people-list-store.effects';
import { peopleListResolver } from './utils/resolvers/people-list.resolver';

export const peopleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PeopleListComponent,
        providers: [
          provideState(peopleListStoreFeature),
          provideEffects([PeopleListStoreEffects]),
        ],
        resolve: {
          peopleList: peopleListResolver,
        },
      },
    ],
  },
];
