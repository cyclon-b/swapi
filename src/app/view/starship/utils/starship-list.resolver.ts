import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { RootStoreFacade } from '../../../store/root-store.facade';
import { skipWhile } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StarshipListStoreFacade } from '../components/starship-list/store/starship-list-store.facade';

export const starshipListResolver: ResolveFn<boolean> = (route, state) => {
  const starshipListStoreFacade = inject(StarshipListStoreFacade);
  const rootFacade = inject(RootStoreFacade);
  const currentPage = route.params['id'];
  return rootFacade.selectedUrlConfig$.pipe(
    skipWhile(config => !config?.starships),
    tap(urlConfig => {
      starshipListStoreFacade.loadEntitiesListStart(
        urlConfig?.starships,
        currentPage ? currentPage : 1
      );
    }),
    map(config => true)
  );
};
