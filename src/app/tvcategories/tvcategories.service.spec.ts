import { TestBed, inject } from '@angular/core/testing';

import { TvcategoriesService } from './tvcategories.service';

describe('TvcategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvcategoriesService]
    });
  });

  it('should be created', inject([TvcategoriesService], (service: TvcategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
