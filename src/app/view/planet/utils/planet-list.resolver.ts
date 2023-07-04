import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetListStoreFacade } from '../components/planet-list/store/planet-list-store.facade';
import { baseListViewResolver } from '../../../shared/base/resolvers/base-list-view.resolver';

export const planetListResolver: ResolveFn<Observable<boolean>> =
  baseListViewResolver('planets', PlanetListStoreFacade);
