import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './single-planet-store.model';

export const SinglePlanetStoreActions = createActionGroup({
  source: 'SinglePlanet',
  events: {
    'Load single planet start': props<ActionModel.Load.Start>(),
    'Load single planet success': props<ActionModel.Load.Success>(),
    'Load single planet failure': props<ActionModel.Load.Failure>(),
    'Load single planet pending': props<ActionModel.Load.Pending>(),
    'Reset single planet state': emptyProps(),
  },
});
