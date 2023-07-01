import { createFeature, createReducer, on } from '@ngrx/store';
import { PersonEntity } from '../../../models/people-list.model';
import { SinglePersonStoreActions } from './single-person-store.actions';

export const singlePersonStoreFeatureKey = 'singlePersonStore';

export interface SinglePersonState {
  personData: PersonEntity | null;
  error: any;
  pending: boolean;
}

export const initialState: SinglePersonState = {
  personData: null,
  error: null,
  pending: true,
};

export const reducer = createReducer(
  initialState,
  on(
    SinglePersonStoreActions.loadSinglePersonSuccess,
    (state, { personData }) => ({
      ...state,
      personData,
      pending: false,
    })
  ),
  on(
    SinglePersonStoreActions.loadSinglePersonPending,
    (state, { isPending }) => ({
      ...state,
      pending: isPending,
    })
  ),
  on(SinglePersonStoreActions.loadSinglePersonFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SinglePersonStoreActions.resetSinglePersonState, state => initialState)
);

export const singlePersonStoreFeature = createFeature({
  name: singlePersonStoreFeatureKey,
  reducer,
});
