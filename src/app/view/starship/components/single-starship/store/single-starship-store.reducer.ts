import { createFeature, createReducer, on } from '@ngrx/store';
import { StarshipEntity } from '../../../models/starship.model';
import { SingleStarshipStoreActions } from './single-starship-store.actions';

export const singleStarshipStoreFeatureKey = 'singleStarshipStore';

export interface SingleStarshipState {
  starshipData: StarshipEntity | null;
  error: any;
  pending: boolean;
}

export const initialState: SingleStarshipState = {
  starshipData: null,
  error: null,
  pending: true,
};

export const reducer = createReducer(
  initialState,
  on(
    SingleStarshipStoreActions.loadSingleStarshipSuccess,
    (state, { starshipData }) => ({
      ...state,
      starshipData,
      pending: false,
    })
  ),
  on(
    SingleStarshipStoreActions.loadSingleStarshipPending,
    (state, { isPending }) => ({
      ...state,
      pending: isPending,
    })
  ),
  on(
    SingleStarshipStoreActions.loadSingleStarshipFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(SingleStarshipStoreActions.resetSingleStarshipState, state => initialState)
);

export const singleStarshipStoreFeature = createFeature({
  name: singleStarshipStoreFeatureKey,
  reducer,
});
