import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { PeopleListStoreFacade } from '../../components/people-list/store/people-list-store.facade';
import { Observable, skipWhile } from 'rxjs';
import { RootStoreFacade } from '../../../../store/root-store.facade';
import { map, tap } from 'rxjs/operators';

export const peopleListResolver: ResolveFn<Observable<true>> = (
  route,
  state
) => {
  const peopleFacade = inject(PeopleListStoreFacade);
  const rootFacade = inject(RootStoreFacade);

  return rootFacade.selectedUrlConfig$.pipe(
    skipWhile(config => !config?.people),
    tap(urlConfig => {
      peopleFacade.loadPeopleListStart(urlConfig?.people);
    }),
    map(config => true)
  );
};
