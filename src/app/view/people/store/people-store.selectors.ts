import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeopleStore from './people-store.reducer';

export const selectPeopleStoreState = createFeatureSelector<fromPeopleStore.State>(
  fromPeopleStore.peopleStoreFeatureKey
);
