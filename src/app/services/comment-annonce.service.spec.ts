import { TestBed } from '@angular/core/testing';

import { CommentAnnonceService } from './comment-annonce.service';

describe('CommentAnnonceService', () => {
  let service: CommentAnnonceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentAnnonceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
