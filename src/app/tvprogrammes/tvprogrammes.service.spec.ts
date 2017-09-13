import { TestBed, inject } from '@angular/core/testing';

import { TvprogrammesService } from './tvprogrammes.service';

describe('TvprogrammesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvprogrammesService]
    });
  });

  it('should be created', inject([TvprogrammesService], (service: TvprogrammesService) => {
    expect(service).toBeTruthy();
  }));
});
