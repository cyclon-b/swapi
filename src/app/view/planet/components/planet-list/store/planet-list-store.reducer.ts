import { createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  PlanetEntity,
  PlanetResponseModel,
} from '../../../models/planet.model';
import { PlanetListStoreActions } from './planet-list-store.actions';

export const planetListStoreFeatureKey = 'planetListStore';

export interface PlanetListState {
  paginationData: Omit<PlanetResponseModel, 'results'>;
  planetList: EntityState<PlanetEntity>;
  pending: boolean;
  error: any;
}

export const PlanetListAdapter = createEntityAdapter<PlanetEntity>({
  selectId: planet => planet?.url,
});
export const initialState: PlanetListState = {
  paginationData: null,
  planetList: PlanetListAdapter.getInitialState(),
  pending: true,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    PlanetListStoreActions.loadPlanetsListSuccess,
    (state, { entities, paginationData }) => ({
      ...state,
      paginationData,
      planetList: PlanetListAdapter.setAll(entities, state.planetList),
      pending: false,
    })
  ),
  on(PlanetListStoreActions.loadPlanetsListPending, (state, { isPending }) => ({
    ...state,
    pending: isPending,
  })),
  on(PlanetListStoreActions.loadPlanetsListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PlanetListStoreActions.resetPlanetsListState, state => initialState)
);

export const planetListStoreFeature = createFeature({
  name: planetListStoreFeatureKey,
  reducer,
});
