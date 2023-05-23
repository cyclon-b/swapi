import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ActionModel } from './root-store.model';

export const RootStoreConfigActions = createActionGroup({
  source: 'RootStore',
  events: {
    'Load config start': emptyProps(),
    'Load config success': props<ActionModel.LoadConfig.Success>(),
    'Load config failure': props<ActionModel.LoadConfig.Failure>(),
    'Reset config': emptyProps(),
  },
});
