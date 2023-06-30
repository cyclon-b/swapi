import * as fromSinglePersonStore from './single-person-store.reducer';
import { selectSinglePersonStoreState } from './single-person-store.selectors';

describe('SinglePersonStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSinglePersonStoreState({
      [fromSinglePersonStore.singlePersonStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
