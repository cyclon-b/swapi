import { createFeature, createReducer, on } from '@ngrx/store';
import { HomeStoreActions } from './home-store.actions';

export const homeStoreFeatureKey = 'homeStore';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(HomeStoreActions.loadHomeStores, state => state),
  on(HomeStoreActions.loadHomeStoresSuccess, (state, action) => state),
  on(HomeStoreActions.loadHomeStoresFailure, (state, action) => state)
);

export const homeStoreFeature = createFeature({
  name: homeStoreFeatureKey,
  reducer,
});
