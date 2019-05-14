import { TestBed, inject } from '@angular/core/testing';

import { VeterinarioAuthGuardService } from './veterinario-auth-guard.service';

describe('VeterinarioAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeterinarioAuthGuardService]
    });
  });

  it('should be created', inject([VeterinarioAuthGuardService], (service: VeterinarioAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
