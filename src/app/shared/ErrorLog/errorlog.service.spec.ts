import { TestBed } from '@angular/core/testing';

import { ErrorlogService } from './errorlog.service';

describe('ErrorlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorlogService = TestBed.get(ErrorlogService);
    expect(service).toBeTruthy();
  });
});
