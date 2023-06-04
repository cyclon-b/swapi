import * as fromPeopleListStore from './people-list-store.reducer';
import { selectPeopleListStoreState } from './people-list-store.selectors';

describe('PeopleListStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPeopleListStoreState({
      [fromPeopleListStore.peopleListStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
