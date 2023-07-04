import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { SinglePersonStoreFacade } from '../../components/single-person/store/single-person-store.facade';
import { firstValueFrom } from 'rxjs';

export const singlePersonResolver: ResolveFn<boolean> = (route, state) => {
  const singlePersonFacade = inject(SinglePersonStoreFacade);
  const url = route.params['url'];
  singlePersonFacade.loadSingleEntityStart(url);
  return firstValueFrom(singlePersonFacade.selectedEntityData$)
    .then(_ => true)
    .catch(e => false);
};
