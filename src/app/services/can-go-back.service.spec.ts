import { TestBed } from '@angular/core/testing';

import { CanGoBackService } from './can-go-back.service';

describe('CanGoBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanGoBackService = TestBed.get(CanGoBackService);
    expect(service).toBeTruthy();
  });
});
