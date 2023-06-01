import { peopleStoreReducer, initialState } from './people-store.reducer';

describe('PeopleStore Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = peopleStoreReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
