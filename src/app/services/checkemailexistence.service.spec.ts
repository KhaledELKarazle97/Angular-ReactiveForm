import { TestBed } from '@angular/core/testing';

import { CheckemailexistenceService } from './checkemailexistence.service';

describe('CheckemailexistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckemailexistenceService = TestBed.get(CheckemailexistenceService);
    expect(service).toBeTruthy();
  });
});
