import { TestBed } from '@angular/core/testing';

import { ActivefirmsService } from './activefirms.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ActivefirmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ActivefirmsService = TestBed.get(ActivefirmsService);
    expect(service).toBeTruthy();
  });
});
