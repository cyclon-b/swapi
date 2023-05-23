import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHomeStore from './home-store.reducer';

export const selectHomeStoreState = createFeatureSelector<fromHomeStore.State>(
  fromHomeStore.homeStoreFeatureKey
);
