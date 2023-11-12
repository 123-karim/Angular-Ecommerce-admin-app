import { TestBed } from '@angular/core/testing';

import { PserviceService } from './pservice.service';

describe('PserviceService', () => {
  let service: PserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
