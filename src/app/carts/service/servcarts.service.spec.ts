import { TestBed } from '@angular/core/testing';

import { ServcartsService } from './servcarts.service';

describe('ServcartsService', () => {
  let service: ServcartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
