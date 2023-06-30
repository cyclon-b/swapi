import { ResolveFn } from '@angular/router';

export const singlePersonResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
