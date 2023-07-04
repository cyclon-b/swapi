import { ResolveFn } from '@angular/router';
import { SinglePlanetStoreFacade } from '../components/single-planet/store/single-planet-store.facade';
import { baseSingleViewResolver } from '../../../shared/base/resolvers/base-single-view.resolver';

export const singlePlanetResolver: ResolveFn<boolean> = baseSingleViewResolver(
  SinglePlanetStoreFacade
);
