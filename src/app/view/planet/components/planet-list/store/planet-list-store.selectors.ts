import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlanetListStore from './planet-list-store.reducer';
import { PlanetListAdapter } from './planet-list-store.reducer';

export const selectPlanetListStoreState =
  createFeatureSelector<fromPlanetListStore.PlanetListState>(
    fromPlanetListStore.planetListStoreFeatureKey
  );

export const getPlanetList = createSelector(selectPlanetListStoreState, state =>
  PlanetListAdapter.getSelectors().selectAll(state.planetList)
);
export const getPlanetListPaginationData = createSelector(
  selectPlanetListStoreState,
  state => state.paginationData
);

export const getPlanetListPending = createSelector(
  selectPlanetListStoreState,
  state => state.pending
);
