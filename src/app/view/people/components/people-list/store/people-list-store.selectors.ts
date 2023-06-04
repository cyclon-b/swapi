import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeopleListStore from './people-list-store.reducer';

export const selectPeopleListStoreState = createFeatureSelector<fromPeopleListStore.State>(
  fromPeopleListStore.peopleListStoreFeatureKey
);
