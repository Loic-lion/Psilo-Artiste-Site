import { TestBed } from '@angular/core/testing';

import { FacebookPostService } from './facebook-post.service';

describe('FacebookPostService', () => {
  let service: FacebookPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
