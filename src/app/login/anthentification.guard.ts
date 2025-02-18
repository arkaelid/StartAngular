import { CanActivateFn } from '@angular/router';

export const anthentificationGuard: CanActivateFn = (route, state) => {
  return false;
};
