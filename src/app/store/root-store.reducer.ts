import { createReducer, on } from '@ngrx/store';
import { ViewModel } from './root-store.model';
import { RootStoreConfigActions } from './root-store.actions';

export const rootStoreKey = 'rootStore';

export interface RootState {
  config: ViewModel.Config | null;
  error: any;
}

export const initialState: RootState = {
  config: null,
  error: null,
};

export const rootReducer = createReducer(
  initialState,
  on(RootStoreConfigActions.loadConfigSuccess, (state, loadedConfig) => ({
    ...state,
    config: {
      ...loadedConfig,
    },
  })),
  on(RootStoreConfigActions.loadConfigFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
