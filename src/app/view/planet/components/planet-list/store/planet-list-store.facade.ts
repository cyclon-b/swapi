import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as planetListStoreSelectors from './planet-list-store.selectors';
import { PlanetListStoreActions } from './planet-list-store.actions';
import { BaseListViewStoreFacadeModel } from '../../../../../shared/base/models/base-list-view-store-facade.model';
import {
  PlanetEntity,
  PlanetResponseModel,
} from '../../../models/planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetListStoreFacade extends BaseListViewStoreFacadeModel<
  PlanetResponseModel,
  PlanetEntity
> {
  private _store$ = inject(Store);

  public dispatch(action: Action) {
    this._store$.dispatch(action);
  }

  public selectedAllEntities$ = this._store$.pipe(
    select(planetListStoreSelectors.getPlanetList)
  );

  public selectedPaginationData$ = this._store$.pipe(
    select(planetListStoreSelectors.getPlanetListPaginationData)
  );

  public selectedPendingStatus$ = this._store$.pipe(
    select(planetListStoreSelectors.getPlanetListPending)
  );

  public loadEntitiesListStart(url = '', pageNumber: number) {
    this.dispatch(
      PlanetListStoreActions.loadPlanetsListStart({ url, pageNumber })
    );
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(PlanetListStoreActions.loadPlanetsListPending({ isPending }));
  }

  public resetState() {
    this.dispatch(PlanetListStoreActions.resetPlanetsListState());
  }
}
