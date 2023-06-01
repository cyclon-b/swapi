import { Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { provideState } from '@ngrx/store';
import { peopleStoreFeature } from './store/people-store.reducer';
import { provideEffects } from '@ngrx/effects';
import { PeopleStoreEffects } from './store/people-store.effects';

export const peopleRoutes: Routes = [
  {
    path: '',
    component: PeopleComponent,
    providers: [
      provideState(peopleStoreFeature),
      provideEffects([PeopleStoreEffects]),
    ],
  },
];
