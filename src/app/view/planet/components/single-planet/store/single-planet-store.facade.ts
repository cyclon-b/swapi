import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singlePlanetSelectors from './single-planet-store.selectors';
import { SinglePlanetStoreActions } from './single-planet-store.actions';

@Injectable({
  providedIn: 'root',
})
export class SinglePlanetStoreFacade {
  private _store$ = inject(Store);

  public selectedSinglePlanetData$ = this._store$.pipe(
    select(singlePlanetSelectors.getPlanetData)
  );
  public selectedPendingStatus$ = this._store$.pipe(
    select(singlePlanetSelectors.getSinglePlanetPending)
  );

  public loadSinglePlanetStart(url) {
    this.dispatch(SinglePlanetStoreActions.loadSinglePlanetStart({ url }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      SinglePlanetStoreActions.loadSinglePlanetPending({ isPending })
    );
  }

  public resetSinglePlanetState() {
    this.dispatch(SinglePlanetStoreActions.resetSinglePlanetState());
  }

  private dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
