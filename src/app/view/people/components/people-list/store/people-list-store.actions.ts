import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PeopleListStoreActions = createActionGroup({
  source: 'PeopleListStore',
  events: {
    'Load PeopleListStores': emptyProps(),
    
    
  }
});
