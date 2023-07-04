import { ResolveFn } from '@angular/router';
import { SingleStarshipStoreFacade } from '../components/single-starship/store/single-starship-store.facade';
import { baseSingleViewResolver } from '../../../shared/base/resolvers/base-single-view.resolver';

export const singleStarshipResolver: ResolveFn<boolean> =
  baseSingleViewResolver(SingleStarshipStoreFacade);
