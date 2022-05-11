import { TestBed } from '@angular/core/testing';

import { AuthorizeGuardService } from './AuthorizeGuardService.service';

describe('AuthorizeGuardService', () => {
  let service: AuthorizeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
