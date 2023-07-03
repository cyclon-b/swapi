import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSingleStarshipStore from './single-starship-store.reducer';

export const selectSingleStarshipStoreState =
  createFeatureSelector<fromSingleStarshipStore.SingleStarshipState>(
    fromSingleStarshipStore.singleStarshipStoreFeatureKey
  );

export const getStarshipData = createSelector(
  selectSingleStarshipStoreState,
  state => state.starshipData
);

export const getSingleStarshipPending = createSelector(
  selectSingleStarshipStoreState,
  state => state.pending
);
