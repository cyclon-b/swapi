import { ResolveFn } from '@angular/router';
import { PeopleStoreFacade } from '../../components/people-list/store/people-store.facade';
import { Observable } from 'rxjs';
import { baseListViewResolver } from '../../../../shared/base/resolvers/base-list-view.resolver';

export const peopleListResolver: ResolveFn<Observable<boolean>> =
  baseListViewResolver('people', PeopleStoreFacade);
