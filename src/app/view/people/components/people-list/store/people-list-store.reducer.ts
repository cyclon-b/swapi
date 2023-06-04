import { createFeature, createReducer, on } from '@ngrx/store';
import { PeopleListStoreActions } from './people-list-store.actions';

export const peopleListStoreFeatureKey = 'peopleListStore';

export interface State {}

export const initialState: State = {};

export const peopleListReducer = createReducer(
  initialState,
  on(PeopleListStoreActions.loadPeopleListStores, state => state)
);

export const peopleListStoreFeature = createFeature({
  name: peopleListStoreFeatureKey,
  reducer: peopleListReducer,
});
