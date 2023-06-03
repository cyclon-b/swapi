import { TestBed } from '@angular/core/testing';

import { SinglePersonService } from './single-person.service';

describe('SinglePersonService', () => {
  let service: SinglePersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglePersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
