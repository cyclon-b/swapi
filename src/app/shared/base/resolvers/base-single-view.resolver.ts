import { inject, Type } from '@angular/core';
import { BaseEntityModel } from '../models/base-response.model';
import { ResolveFn } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { BaseSingleViewStoreFacadeModel } from '../models/base-single-view-store-facade.model';

type singleViewResolverFunction = (
  singleFacade: Type<BaseSingleViewStoreFacadeModel<BaseEntityModel>>
) => ResolveFn<boolean>;
export const baseSingleViewResolver: singleViewResolverFunction =
  singleFacade => (route, state) => {
    const facade = inject(singleFacade);
    const url = route.params['url'];
    facade.loadSingleEntityStart(url);
    return firstValueFrom(facade.selectedEntityData$)
      .then(_ => true)
      .catch(e => false);
  };
