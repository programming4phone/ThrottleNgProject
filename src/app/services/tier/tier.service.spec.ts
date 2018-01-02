import { TestBed, inject } from '@angular/core/testing';

import { TierService } from './tier.service';

describe('TierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TierService]
    });
  });

  it('should be created', inject([TierService], (service: TierService) => {
    expect(service).toBeTruthy();
  }));
});
