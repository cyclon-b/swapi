import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSinglePersonStore from './single-person-store.reducer';

export const selectSinglePersonStoreState =
  createFeatureSelector<fromSinglePersonStore.SinglePersonState>(
    fromSinglePersonStore.singlePersonStoreFeatureKey
  );

export const getPersonData = createSelector(
  selectSinglePersonStoreState,
  state => state.personData
);

export const getSinglePersonPending = createSelector(
  selectSinglePersonStoreState,
  state => state.pending
);
