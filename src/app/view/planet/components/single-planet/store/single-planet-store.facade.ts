import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singlePlanetSelectors from './single-planet-store.selectors';
import { SinglePlanetStoreActions } from './single-planet-store.actions';
import { BaseSingleViewStoreFacadeModel } from '../../../../../shared/base/models/base-single-view-store-facade.model';
import { PlanetEntity } from '../../../models/planet.model';

@Injectable({
  providedIn: 'root',
})
export class SinglePlanetStoreFacade extends BaseSingleViewStoreFacadeModel<PlanetEntity> {
  private _store$ = inject(Store);

  public selectedEntityData$ = this._store$.pipe(
    select(singlePlanetSelectors.getPlanetData)
  );
  public selectedPendingStatus$ = this._store$.pipe(
    select(singlePlanetSelectors.getSinglePlanetPending)
  );

  public loadSingleEntityStart(url) {
    this.dispatch(SinglePlanetStoreActions.loadSinglePlanetStart({ url }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      SinglePlanetStoreActions.loadSinglePlanetPending({ isPending })
    );
  }

  public resetState() {
    this.dispatch(SinglePlanetStoreActions.resetSinglePlanetState());
  }

  public dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
