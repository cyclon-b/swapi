import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PeopleStoreEffects } from './people-store.effects';

describe('PeopleStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: PeopleStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeopleStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PeopleStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
