import { createFeature, createReducer, on } from '@ngrx/store';
import { PeopleListStoreActions } from './people-list-store.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { PersonEntity, PersonResponseModel } from '../models/people-list.model';

export const peopleListStoreFeatureKey = 'peopleListStore';

export interface State {
  paginationData: Omit<PersonResponseModel, 'results'>;
  peopleList: EntityState<PersonEntity>;
  pending: boolean;
  error: any;
}

export const PeopleListAdapter = createEntityAdapter<PersonEntity>({
  selectId: person => person?.url,
});
export const initialState: State = {
  paginationData: null,
  peopleList: PeopleListAdapter.getInitialState(),
  pending: true,
  error: null,
};

export const peopleListReducer = createReducer(
  initialState,
  on(
    PeopleListStoreActions.loadPeopleListSuccess,
    (state, { entities, paginationData }) => ({
      ...state,
      paginationData,
      peopleList: PeopleListAdapter.setAll(entities, state.peopleList),
      pending: false,
    })
  ),
  on(PeopleListStoreActions.loadPeopleListPending, (state, { isPending }) => ({
    ...state,
    pending: isPending,
  })),
  on(PeopleListStoreActions.loadPeopleListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PeopleListStoreActions.resetPeopleListState, state => initialState)
);

export const peopleListStoreFeature = createFeature({
  name: peopleListStoreFeatureKey,
  reducer: peopleListReducer,
});
