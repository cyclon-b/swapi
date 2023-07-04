import { Observable } from 'rxjs';
import { BaseEntityModel, BaseResponseModel } from './base-response.model';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseListViewStoreFacadeModel<
  T extends BaseResponseModel,
  V extends BaseEntityModel
> {
  public abstract selectedAllEntities$: Observable<V[]>;
  public abstract selectedPaginationData$: Observable<Omit<T, 'results'>>;
  public abstract selectedPendingStatus$: Observable<boolean>;

  public abstract loadEntitiesListStart(url: string, pageNumber: number);

  public abstract togglePendingStatus(isPending: boolean);

  public abstract resetState();

  public abstract dispatch(action: Action);
}
