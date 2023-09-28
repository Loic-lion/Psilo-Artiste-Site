import { TestBed } from '@angular/core/testing';

import { DataMusicService } from './data-music.service';

describe('DataMusicService', () => {
  let service: DataMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
