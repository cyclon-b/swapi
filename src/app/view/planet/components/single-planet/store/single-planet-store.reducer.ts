import { createFeature, createReducer, on } from '@ngrx/store';
import { PlanetEntity } from '../../../models/planet.model';
import { SinglePlanetStoreActions } from './single-planet-store.actions';

export const singlePlanetFeatureKey = 'singlePlanet';

export interface SinglePlanetState {
  planetData: PlanetEntity | null;
  error: any;
  pending: boolean;
}

export const initialState: SinglePlanetState = {
  planetData: null,
  error: null,
  pending: true,
};

export const reducer = createReducer(
  initialState,
  on(
    SinglePlanetStoreActions.loadSinglePlanetSuccess,
    (state, { planetData }) => ({
      ...state,
      planetData,
      pending: false,
    })
  ),
  on(
    SinglePlanetStoreActions.loadSinglePlanetPending,
    (state, { isPending }) => ({
      ...state,
      pending: isPending,
    })
  ),
  on(SinglePlanetStoreActions.loadSinglePlanetFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SinglePlanetStoreActions.resetSinglePlanetState, state => initialState)
);

export const singlePlanetFeature = createFeature({
  name: singlePlanetFeatureKey,
  reducer,
});
