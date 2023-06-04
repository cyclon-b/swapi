import { TestBed } from '@angular/core/testing';

import { PeopleListService } from './people-list.service';

describe('PeopleListService', () => {
  let service: PeopleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
