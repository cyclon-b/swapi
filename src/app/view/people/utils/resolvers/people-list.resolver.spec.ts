import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { peopleListResolver } from './people-list.resolver';

describe('peopleListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => peopleListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
