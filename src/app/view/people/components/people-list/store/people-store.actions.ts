import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './people-store.model';

export const PeopleStoreActions = createActionGroup({
  source: 'PeopleStore',
  events: {
    'Load people start': props<ActionModel.Load.Start>(),
    'Load people success': props<ActionModel.Load.Success>(),
    'Load people failure': props<ActionModel.Load.Failure>(),
    'Load people pending': props<ActionModel.Load.Pending>(),
    'Reset people state': emptyProps(),
  },
});
