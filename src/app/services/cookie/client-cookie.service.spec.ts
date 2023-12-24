import { TestBed } from '@angular/core/testing';

import { ClientCookieService } from './client-cookie.service';

describe('ClientCookieService', () => {
  let service: ClientCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
