import { createFeature, createReducer, on } from '@ngrx/store';
import { PeopleStoreActions } from './people-store.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  PersonEntity,
  PersonResponseModel,
} from '../../../models/people-list.model';

export const peopleListStoreFeatureKey = 'peopleListStore';

export interface PeopleListState {
  paginationData: Omit<PersonResponseModel, 'results'>;
  peopleList: EntityState<PersonEntity>;
  pending: boolean;
  error: any;
}

export const PeopleListAdapter = createEntityAdapter<PersonEntity>({
  selectId: person => person?.url,
});
export const initialState: PeopleListState = {
  paginationData: null,
  peopleList: PeopleListAdapter.getInitialState(),
  pending: true,
  error: null,
};

export const peopleListReducer = createReducer(
  initialState,
  on(
    PeopleStoreActions.loadPeopleSuccess,
    (state, { entities, paginationData }) => ({
      ...state,
      paginationData,
      peopleList: PeopleListAdapter.setAll(entities, state.peopleList),
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

export const peopleStoreFeature = createFeature({
  name: peopleListStoreFeatureKey,
  reducer: peopleListReducer,
});
