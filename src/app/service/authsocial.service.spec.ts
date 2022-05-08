import { TestBed } from '@angular/core/testing';

import { AuthsocialService } from './authsocial.service';

describe('AuthsocialService', () => {
  let service: AuthsocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthsocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
