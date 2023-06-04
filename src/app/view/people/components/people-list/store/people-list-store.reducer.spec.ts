import { peopleListReducer, initialState } from './people-list-store.reducer';

describe('PeopleListStore Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = peopleListReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
