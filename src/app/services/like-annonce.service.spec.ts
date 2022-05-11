import { TestBed } from '@angular/core/testing';

import { LikeAnnonceService } from './like-annonce.service';

describe('LikeAnnonceService', () => {
  let service: LikeAnnonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeAnnonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
