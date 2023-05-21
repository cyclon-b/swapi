import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const HomeStoreActions = createActionGroup({
  source: 'HomeStore',
  events: {
    'Load HomeStores': emptyProps(),
    'Load HomeStores Success': props<{ data: unknown }>(),
    'Load HomeStores Failure': props<{ error: unknown }>(),
  }
});
