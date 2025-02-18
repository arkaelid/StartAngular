import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { anthentificationGuard } from './anthentification.guard';

describe('anthentificationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => anthentificationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
