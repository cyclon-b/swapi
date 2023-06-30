import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { singlePersonResolver } from './single-person.resolver';

describe('singlePersonResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => singlePersonResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
