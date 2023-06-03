import { ResolveFn } from '@angular/router';

export const peopleListResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
