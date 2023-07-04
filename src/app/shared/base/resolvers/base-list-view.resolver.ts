import { ResolveFn } from '@angular/router';
import { Observable, skipWhile } from 'rxjs';
import { inject, Type } from '@angular/core';
import { BaseListViewStoreFacadeModel } from '../models/base-list-view-store-facade.model';
import {
  BaseEntityModel,
  BaseResponseModel,
} from '../models/base-response.model';
import { RootStoreFacade } from '../../../store/root-store.facade';
import { map, tap } from 'rxjs/operators';

type listResolverFunction = (
  configKey: string,
  listFacade: Type<
    BaseListViewStoreFacadeModel<BaseResponseModel, BaseEntityModel>
  >
) => ResolveFn<Observable<boolean>>;
export const baseListViewResolver: listResolverFunction =
  (configKey, listFacade) => (route, state) => {
    const contentFacade = inject(listFacade);
    const rootFacade = inject(RootStoreFacade);
    const currentPage = route.params['id'];
    return rootFacade.selectedUrlConfig$.pipe(
      skipWhile(config => !config?.[configKey]),
      tap(urlConfig => {
        contentFacade.loadEntitiesListStart(
          urlConfig?.[configKey],
          currentPage ? currentPage : 1
        );
      }),
      map(config => true)
    );
  };
