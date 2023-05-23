import * as fromHomeStore from './home-store.reducer';
import { selectHomeStoreState } from './home-store.selectors';

describe('HomeStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectHomeStoreState({
      [fromHomeStore.homeStoreFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
