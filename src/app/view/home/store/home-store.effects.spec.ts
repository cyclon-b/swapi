import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HomeStoreEffects } from './home-store.effects';

describe('HomeStoreEffects', () => {
  let actions$: Observable<any>;
  let effects: HomeStoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeStoreEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(HomeStoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
