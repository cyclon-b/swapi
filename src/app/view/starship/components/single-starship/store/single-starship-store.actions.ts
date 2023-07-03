import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './single-starship-store.model';

export const SingleStarshipStoreActions = createActionGroup({
  source: 'SingleStarshipStore',
  events: {
    'Load single starship start': props<ActionModel.Load.Start>(),
    'Load single starship success': props<ActionModel.Load.Success>(),
    'Load single starship failure': props<ActionModel.Load.Failure>(),
    'Load single starship pending': props<ActionModel.Load.Pending>(),
    'Reset single starship state': emptyProps(),
  },
});
