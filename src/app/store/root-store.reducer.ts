import { createReducer, on } from '@ngrx/store';
import { ViewModel } from './root-store.model';
import * as rootActions from './root-store.actions';

export const rootStoreKey = 'rootStore';

export interface RootState {
  config: ViewModel.Config | null;
}

export const initialState: RootState = {
  config: null,
};

export const rootReducer = createReducer(
  initialState,
  on(
    rootActions.RootStoreConfigActions.loadConfigSuccess,
    (state, loadedConfig) => ({
      ...state,
      config: {
        ...loadedConfig,
      },
    })
  )
);
