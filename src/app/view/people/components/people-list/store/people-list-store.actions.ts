import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './people-list-store.model';

export const PeopleListStoreActions = createActionGroup({
  source: 'PeopleListStore',
  events: {
    'Load people list start': props<ActionModel.Load.Start>(),
    'Load people list success': props<ActionModel.Load.Success>(),
    'Load people list failure': props<ActionModel.Load.Failure>(),
    'Reset people list state': emptyProps(),
  },
});
