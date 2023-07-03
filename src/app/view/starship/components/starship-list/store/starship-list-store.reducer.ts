import { createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  StarshipEntity,
  StarshipResponseModel,
} from '../../../models/starship.model';
import { StarshipListStoreActions } from './starship-list-store.actions';

export const starshipListStoreFeatureKey = 'starshipListStore';

export interface StarshipListState {
  paginationData: Omit<StarshipResponseModel, 'results'>;
  starshipsList: EntityState<StarshipEntity>;
  pending: boolean;
  error: any;
}

export const StarshipListAdapter = createEntityAdapter<StarshipEntity>({
  selectId: starship => starship?.url,
});
export const initialState: StarshipListState = {
  paginationData: null,
  starshipsList: StarshipListAdapter.getInitialState(),
  pending: true,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    StarshipListStoreActions.loadStarshipsListSuccess,
    (state, { entities, paginationData }) => ({
      ...state,
      paginationData,
      starshipsList: StarshipListAdapter.setAll(entities, state.starshipsList),
      pending: false,
    })
  ),
  on(
    StarshipListStoreActions.loadStarshipsListPending,
    (state, { isPending }) => ({
      ...state,
      pending: isPending,
    })
  ),
  on(StarshipListStoreActions.loadStarshipsListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(StarshipListStoreActions.resetStarshipsListState, state => initialState)
);

export const starshipListStoreFeature = createFeature({
  name: starshipListStoreFeatureKey,
  reducer,
});
