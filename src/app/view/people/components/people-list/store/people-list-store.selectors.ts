import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeopleListStore from './people-list-store.reducer';
import { PeopleListAdapter } from './people-list-store.reducer';
import { state } from '@angular/animations';

export const selectPeopleListStoreState =
  createFeatureSelector<fromPeopleListStore.State>(
    fromPeopleListStore.peopleListStoreFeatureKey
  );

export const getPeopleList = createSelector(selectPeopleListStoreState, state =>
  PeopleListAdapter.getSelectors().selectAll(state.peopleList)
);

export const getPeoplePaginationData = createSelector(
  selectPeopleListStoreState,
  state => state.paginationData
);
