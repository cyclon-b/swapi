import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeopleListStore from './people-store.reducer';
import { PeopleListAdapter } from './people-store.reducer';
import { find as _find } from 'lodash-es';
import { PersonEntity } from '../../../models/people-list.model';

export const selectPeopleListStoreState =
  createFeatureSelector<fromPeopleListStore.PeopleListState>(
    fromPeopleListStore.peopleListStoreFeatureKey
  );

export const getPeopleList = createSelector(selectPeopleListStoreState, state =>
  PeopleListAdapter.getSelectors().selectAll(state.peopleList)
);

export const getPeoplePaginationData = createSelector(
  selectPeopleListStoreState,
  state => state.paginationData
);

export const getPeoplePending = createSelector(
  selectPeopleListStoreState,
  state => state.pending
);
