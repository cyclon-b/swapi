import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './single-person-store.model';

export const SinglePersonStoreActions = createActionGroup({
  source: 'SinglePersonStore',
  events: {
    'Load single person start': props<ActionModel.Load.Start>(),
    'Load single person success': props<ActionModel.Load.Success>(),
    'Load single person failure': props<ActionModel.Load.Failure>(),
    'Load single person pending': props<ActionModel.Load.Pending>(),
    'Reset single person state': emptyProps(),
  },
});
