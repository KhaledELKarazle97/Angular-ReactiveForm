import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registeration.service';

describe('DataSenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
