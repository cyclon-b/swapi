import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SingleStarshipStoreFacade } from '../components/single-starship/store/single-starship-store.facade';

export const singleStarshipResolver: ResolveFn<boolean> = (route, state) => {
  const singleStarshipStoreFacade = inject(SingleStarshipStoreFacade);
  const url = route.params['url'];
  singleStarshipStoreFacade.loadSingleEntityStart(url);
  return firstValueFrom(singleStarshipStoreFacade.selectedEntityData$)
    .then(_ => true)
    .catch(e => false);
};
