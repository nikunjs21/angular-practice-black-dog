import { TestBed } from '@angular/core/testing';

import { EmplCountService } from './empl-count.service';

describe('EmplCountService', () => {
  let service: EmplCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
