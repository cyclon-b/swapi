import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as starshipsListStoreSelectors from './starship-list-store.selectors';
import { StarshipListStoreActions } from './starship-list-store.actions';
import { BaseListViewStoreFacadeModel } from '../../../../../shared/base/models/base-list-view-store-facade.model';
import {
  StarshipEntity,
  StarshipResponseModel,
} from '../../../models/starship.model';

@Injectable({ providedIn: 'root' })
export class StarshipListStoreFacade extends BaseListViewStoreFacadeModel<
  StarshipResponseModel,
  StarshipEntity
> {
  private _store$ = inject(Store);

  public dispatch(action: Action) {
    this._store$.dispatch(action);
  }

  public selectedAllEntities$ = this._store$.pipe(
    select(starshipsListStoreSelectors.getStarshipList)
  );

  public selectedPaginationData$ = this._store$.pipe(
    select(starshipsListStoreSelectors.getStarshipListPaginationData)
  );

  public selectedPendingStatus$ = this._store$.pipe(
    select(starshipsListStoreSelectors.getStarshipListPending)
  );

  public loadEntitiesListStart(url = '', pageNumber: number) {
    this.dispatch(
      StarshipListStoreActions.loadStarshipsListStart({ url, pageNumber })
    );
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      StarshipListStoreActions.loadStarshipsListPending({ isPending })
    );
  }

  public resetState() {
    this.dispatch(StarshipListStoreActions.resetStarshipsListState());
  }
}
