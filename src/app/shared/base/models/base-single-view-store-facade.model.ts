import { Observable } from 'rxjs';
import { BaseEntityModel } from './base-response.model';
import { Action } from '@ngrx/store';

export abstract class BaseSingleViewStoreFacadeModel<
  T extends BaseEntityModel
> {
  public abstract selectedEntityData$: Observable<T>;
  public abstract selectedPendingStatus$: Observable<boolean>;

  public abstract loadSingleEntityStart(url: string);
  public abstract togglePendingStatus(isPending: boolean);
  public abstract resetState();
  public abstract dispatch(action: Action);
}
