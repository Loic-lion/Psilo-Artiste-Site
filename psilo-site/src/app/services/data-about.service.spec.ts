import { TestBed } from '@angular/core/testing';

import { DataAboutService } from './data-about.service';

describe('DataAboutService', () => {
  let service: DataAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
