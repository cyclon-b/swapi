import * as fromPeopleStore from './people-store.reducer';
import { selectPeopleStoreState } from './people-store.selectors';

describe('PeopleStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPeopleStoreState({
      [fromPeopleStore.peopleStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
