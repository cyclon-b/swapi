import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PeopleListStoreEffects } from './people-list-store.effects';

describe('PeopleListStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: PeopleListStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeopleListStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PeopleListStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
