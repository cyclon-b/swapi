import * as fromPeopleListStore from './people-store.reducer';
import { selectPeopleListStoreState } from './people-store.selectors';

describe('PeopleListStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPeopleListStoreState({
      [fromPeopleListStore.peopleStoreFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
