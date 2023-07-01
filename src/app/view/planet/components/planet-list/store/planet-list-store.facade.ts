import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as planetListStoreSelectors from './planet-list-store.selectors';
import { PlanetListStoreActions } from './planet-list-store.actions';

@Injectable({
  providedIn: 'root',
})
export class PlanetListStoreFacade {
  private _store$ = inject(Store);

  private dispatch(action: Action) {
    this._store$.dispatch(action);
  }

  public selectedAllPlanetList$ = this._store$.pipe(
    select(planetListStoreSelectors.getPlanetList)
  );

  public selectedPlanetListPaginationData$ = this._store$.pipe(
    select(planetListStoreSelectors.getPlanetListPaginationData)
  );

  public selectedPendingStatus$ = this._store$.pipe(
    select(planetListStoreSelectors.getPlanetListPending)
  );

  public loadPlanetListStart(url = '', pageNumber: number) {
    this.dispatch(
      PlanetListStoreActions.loadPlanetsListStart({ url, pageNumber })
    );
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(PlanetListStoreActions.loadPlanetsListPending({ isPending }));
  }

  public resetPlanetListState() {
    this.dispatch(PlanetListStoreActions.resetPlanetsListState());
  }
}
