import { createFeature, createReducer, on } from '@ngrx/store';
import { PeopleStoreActions } from './people-store.actions';

export const peopleStoreFeatureKey = 'peopleStore';

export interface PeopleState {}

export const initialState: PeopleState = {};

export const peopleStoreReducer = createReducer(
  initialState,
  on(PeopleStoreActions.yPeopleStores, state => state),
  on(PeopleStoreActions.yPeopleStoresSuccess, (state, action) => state),
  on(PeopleStoreActions.yPeopleStoresFailure, (state, action) => state)
);

export const peopleStoreFeature = createFeature({
  name: peopleStoreFeatureKey,
  reducer: peopleStoreReducer,
});
