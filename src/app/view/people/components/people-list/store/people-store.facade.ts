import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { PeopleStoreActions } from './people-store.actions';
import * as peopleListSelectors from './people-store.selectors';
import { BaseListViewStoreFacadeModel } from '../../../../../shared/models/base-list-view-store-facade.model';
import {
  PersonEntity,
  PersonResponseModel,
} from '../../../models/people-list.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleStoreFacade extends BaseListViewStoreFacadeModel<
  PersonResponseModel,
  PersonEntity
> {
  private _store$ = inject(Store);

  public override selectedAllEntities$ = this._store$.pipe(
    select(peopleListSelectors.getPeopleList)
  );

  public override selectedPaginationData$ = this._store$.pipe(
    select(peopleListSelectors.getPeoplePaginationData)
  );

  public override selectedPendingStatus$ = this._store$.pipe(
    select(peopleListSelectors.getPeoplePending)
  );

  public loadEntitiesListStart(url = '', pageNumber: number) {
    this.dispatch(PeopleStoreActions.loadPeopleStart({ url, pageNumber }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(PeopleStoreActions.loadPeoplePending({ isPending }));
  }

  public resetState() {
    this.dispatch(PeopleStoreActions.resetPeopleState());
  }

  public dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
