import { TestBed } from '@angular/core/testing';

import { SignalerAnnonceService } from './signaler-annonce.service';

describe('SignalerAnnonceService', () => {
  let service: SignalerAnnonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalerAnnonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
