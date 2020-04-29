import { TestBed } from '@angular/core/testing';

import { AmiiboservicesService } from './amiiboservices.service';

describe('AmiiboservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmiiboservicesService = TestBed.get(AmiiboservicesService);
    expect(service).toBeTruthy();
  });
});
