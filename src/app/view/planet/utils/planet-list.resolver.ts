import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { RootStoreFacade } from '../../../store/root-store.facade';
import { Observable, skipWhile } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PlanetListStoreFacade } from '../components/planet-list/store/planet-list-store.facade';

export const planetListResolver: ResolveFn<Observable<boolean>> = (
  route,
  state
) => {
  const planetFacade = inject(PlanetListStoreFacade);
  const rootFacade = inject(RootStoreFacade);
  const currentPage = route.params['id'];
  return rootFacade.selectedUrlConfig$.pipe(
    skipWhile(config => !config?.planets),
    tap(urlConfig => {
      planetFacade.loadEntitiesListStart(
        urlConfig?.planets,
        currentPage ? currentPage : 1
      );
    }),
    map(config => true)
  );
};
