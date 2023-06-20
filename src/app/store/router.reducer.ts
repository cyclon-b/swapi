import { createReducer, on } from '@ngrx/store';

export const routerFeatureKey = 'routerStore';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(initialState);
