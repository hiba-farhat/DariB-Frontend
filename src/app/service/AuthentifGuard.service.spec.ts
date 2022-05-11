import { TestBed } from '@angular/core/testing';

import { AuthentifguardserviceService } from './AuthentifGuard.service';

describe('AuthentifguardserviceService', () => {
  let service: AuthentifguardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentifguardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
