import { TestBed, inject } from '@angular/core/testing';

import { ServicioEmailService } from './servicio-email.service';

describe('ServicioEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioEmailService]
    });
  });

  it('should be created', inject([ServicioEmailService], (service: ServicioEmailService) => {
    expect(service).toBeTruthy();
  }));
});
