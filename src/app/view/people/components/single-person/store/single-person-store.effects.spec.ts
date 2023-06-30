import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SinglePersonStoreEffects } from './single-person-store.effects';

describe('SinglePersonStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: SinglePersonStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SinglePersonStoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SinglePersonStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
