import { TestBed } from '@angular/core/testing';

import { FuturDateService } from './futur-date.service';

describe('FuturDateService', () => {
  let service: FuturDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuturDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
