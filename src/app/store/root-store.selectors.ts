import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState, rootStoreKey } from './root-store.reducer';

export const rootState = createFeatureSelector<RootState>(rootStoreKey);

export namespace Config {
  export const getUrlConfig = createSelector(
    rootState,
    state => state?.config?.urlConfig
  );
  export const getTopMenuConfig = createSelector(
    rootState,
    state => state?.config?.topMenuConfig
  );
}
