import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RootState, rootStoreKey } from './root-store.reducer';
import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';

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

export namespace Router {
  export const {
    selectCurrentRoute, // select the current route
    selectFragment, // select the current route fragment
    selectQueryParams, // select the current route query params
    selectQueryParam, // factory function to select a query param
    selectRouteParams, // select the current route params
    selectRouteParam, // factory function to select a route param
    selectRouteData, // select the current route data
    selectRouteDataParam, // factory function to select a route data param
    selectUrl, // select the current url
    selectTitle, // select the title if available
  } = getRouterSelectors();

  export const getRouteParams = createSelector(
    selectRouteParams,
    params => params
  );
}
