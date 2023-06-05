import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeopleListStore from './people-list-store.reducer';
import { PeopleListAdapter } from './people-list-store.reducer';

export const selectPeopleListStoreState =
  createFeatureSelector<fromPeopleListStore.State>(
    fromPeopleListStore.peopleListStoreFeatureKey
  );

export const getPeopleList = createSelector(selectPeopleListStoreState, state =>
  PeopleListAdapter.getSelectors().selectAll(state.peopleList)
);
