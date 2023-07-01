import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './planet-list-store.model';

export const PlanetListStoreActions = createActionGroup({
  source: 'PlanetListStore',
  events: {
    'Load planets list start': props<ActionModel.Load.Start>(),
    'Load planets list success': props<ActionModel.Load.Success>(),
    'Load planets list failure': props<ActionModel.Load.Failure>(),
    'Load planets list pending': props<ActionModel.Load.Pending>(),
    'Reset planets list state': emptyProps(),
  },
});
