import { TestBed } from '@angular/core/testing';

import { BaseContentService } from './base-content.service';

describe('BaseContentService', () => {
  let service: BaseContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
