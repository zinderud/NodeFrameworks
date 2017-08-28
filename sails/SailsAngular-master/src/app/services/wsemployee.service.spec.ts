import { TestBed, inject } from '@angular/core/testing';

import { WsemployeeService } from './wsemployee.service';

describe('WsemployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsemployeeService]
    });
  });

  it('should be created', inject([WsemployeeService], (service: WsemployeeService) => {
    expect(service).toBeTruthy();
  }));
});
