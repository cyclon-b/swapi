import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeopleListStore from './people-store.reducer';
import { PeopleAdapter } from './people-store.reducer';
import { find as _find } from 'lodash-es';
import { PersonEntity } from '../../models/people-list.model';

export const selectPeopleListStoreState =
  createFeatureSelector<fromPeopleListStore.State>(
    fromPeopleListStore.peopleStoreFeatureKey
  );

export const getPeopleList = createSelector(selectPeopleListStoreState, state =>
  PeopleAdapter.getSelectors().selectAll(state.peopleList)
);

export const getSinglePerson = createSelector(
  getPeopleList,
  (entities, { url }) => _find(entities, entity => entity?.url === url)
);

export const getPeoplePaginationData = createSelector(
  selectPeopleListStoreState,
  state => state.paginationData
);

export const getPeoplePending = createSelector(
  selectPeopleListStoreState,
  state => state.pending
);
