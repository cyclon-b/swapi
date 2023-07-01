import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSinglePlanet from './single-planet-store.reducer';

export const selectSinglePlanetState =
  createFeatureSelector<fromSinglePlanet.SinglePlanetState>(
    fromSinglePlanet.singlePlanetFeatureKey
  );

export const getPlanetData = createSelector(
  selectSinglePlanetState,
  state => state.planetData
);

export const getSinglePlanetPending = createSelector(
  selectSinglePlanetState,
  state => state.pending
);
