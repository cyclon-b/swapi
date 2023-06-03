import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { provideState } from '@ngrx/store';
import { peopleStoreFeature } from './store/people-store.reducer';
import { provideEffects } from '@ngrx/effects';
import { PeopleStoreEffects } from './store/people-store.effects';

export const peopleRoutes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
    providers: [
      provideState(peopleStoreFeature),
      provideEffects([PeopleStoreEffects]),
    ],
  },
];
