import { createFeature, createReducer, on } from '@ngrx/store';
import { PersonEntity } from '../../models/people-list.model';
import { SinglePersonStoreActions } from './single-person-store.actions';
import { PeopleStoreActions } from '../../people-list/store/people-store.actions';

export const singlePersonStoreFeatureKey = 'singlePersonStore';

export interface SinglePersonState {
  personData: PersonEntity | null;
  error: any;
  pending: boolean;
}

export const initialState: SinglePersonState = {
  personData: null,
  error: null,
  pending: false,
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
  on(PeopleStoreActions.loadPeoplePending, (state, { isPending }) => ({
    ...state,
    pending: isPending,
  })),
  on(PeopleStoreActions.loadPeopleFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PeopleStoreActions.resetPeopleState, state => initialState)
);

export const singlePersonStoreFeature = createFeature({
  name: singlePersonStoreFeatureKey,
  reducer,
});
