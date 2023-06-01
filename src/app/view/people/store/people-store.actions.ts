import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PeopleStoreActions = createActionGroup({
  source: 'PeopleStore',
  events: {
    'Y PeopleStores': emptyProps(),
    'Y PeopleStores Success': props<{ data: unknown }>(),
    'Y PeopleStores Failure': props<{ error: unknown }>(),
  }
});
