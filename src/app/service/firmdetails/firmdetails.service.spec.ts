import { TestBed } from '@angular/core/testing';

import { FirmdetailsService } from './firmdetails.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FirmdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: FirmdetailsService = TestBed.get(FirmdetailsService);
    expect(service).toBeTruthy();
  });
});
