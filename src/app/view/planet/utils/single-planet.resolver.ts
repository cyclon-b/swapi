import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SinglePlanetStoreFacade } from '../components/single-planet/store/single-planet-store.facade';

export const singlePlanetResolver: ResolveFn<boolean> = (route, state) => {
  const singlePlanetFacade = inject(SinglePlanetStoreFacade);
  const url = route.params['url'];
  singlePlanetFacade.loadSingleEntityStart(url);
  return firstValueFrom(singlePlanetFacade.selectedEntityData$)
    .then(_ => true)
    .catch(e => false);
};
