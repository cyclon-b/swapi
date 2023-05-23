import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RootStoreEffects } from './root-store.effects';

describe('RootStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: RootStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootStoreEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RootStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
