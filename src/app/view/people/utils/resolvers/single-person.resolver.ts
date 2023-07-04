import { ResolveFn } from '@angular/router';
import { SinglePersonStoreFacade } from '../../components/single-person/store/single-person-store.facade';
import { baseSingleViewResolver } from '../../../../shared/base/resolvers/base-single-view.resolver';

export const singlePersonResolver: ResolveFn<boolean> = baseSingleViewResolver(
  SinglePersonStoreFacade
);
