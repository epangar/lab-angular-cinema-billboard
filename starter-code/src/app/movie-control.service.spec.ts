import { TestBed, inject } from '@angular/core/testing';

import { MovieControlService } from './movie-control.service';

describe('MovieControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieControlService]
    });
  });

  it('should be created', inject([MovieControlService], (service: MovieControlService) => {
    expect(service).toBeTruthy();
  }));
});
