import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './starship-list-store.model';

export const StarshipListStoreActions = createActionGroup({
  source: 'StarshipListStore',
  events: {
    'Load starships list start': props<ActionModel.Load.Start>(),
    'Load starships list success': props<ActionModel.Load.Success>(),
    'Load starships list failure': props<ActionModel.Load.Failure>(),
    'Load starships list pending': props<ActionModel.Load.Pending>(),
    'Reset starships list state': emptyProps(),
  },
});
