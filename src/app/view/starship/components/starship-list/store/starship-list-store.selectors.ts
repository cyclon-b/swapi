import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStarshipListStore from './starship-list-store.reducer';
import { StarshipListAdapter } from './starship-list-store.reducer';

export const selectStarshipListStoreState =
  createFeatureSelector<fromStarshipListStore.StarshipListState>(
    fromStarshipListStore.starshipListStoreFeatureKey
  );

export const getStarshipList = createSelector(
  selectStarshipListStoreState,
  state => StarshipListAdapter.getSelectors().selectAll(state.starshipsList)
);
export const getStarshipListPaginationData = createSelector(
  selectStarshipListStoreState,
  state => state.paginationData
);

export const getStarshipListPending = createSelector(
  selectStarshipListStoreState,
  state => state.pending
);
