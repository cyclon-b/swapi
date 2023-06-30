import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { PeopleStoreFacade } from '../../components/people-list/store/people-store.facade';
import { Observable, skipWhile } from 'rxjs';
import { RootStoreFacade } from '../../../../store/root-store.facade';
import { map, tap } from 'rxjs/operators';

export const peopleResolver: ResolveFn<Observable<true>> = (route, state) => {
  const peopleFacade = inject(PeopleStoreFacade);
  const rootFacade = inject(RootStoreFacade);
  const currentPage = route.params['id'];
  return rootFacade.selectedUrlConfig$.pipe(
    skipWhile(config => !config?.people),
    tap(urlConfig => {
      peopleFacade.loadPeopleListStart(
        urlConfig?.people,
        currentPage ? currentPage : 1
      );
    }),
    map(config => true)
  );
};
