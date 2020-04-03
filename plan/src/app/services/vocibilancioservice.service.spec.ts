import { TestBed } from '@angular/core/testing';

import { VocibilancioserviceService } from './vocibilancioservice.service';

describe('VocibilancioserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocibilancioserviceService = TestBed.get(VocibilancioserviceService);
    expect(service).toBeTruthy();
  });
});
