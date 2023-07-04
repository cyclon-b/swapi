import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { StarshipListStoreFacade } from '../components/starship-list/store/starship-list-store.facade';
import { baseListViewResolver } from '../../../shared/base/resolvers/base-list-view.resolver';

export const starshipListResolver: ResolveFn<Observable<boolean>> =
  baseListViewResolver('starships', StarshipListStoreFacade);
