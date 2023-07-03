import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as starshipsListStoreSelectors from './starship-list-store.selectors';
import { StarshipListStoreActions } from './starship-list-store.actions';

@Injectable({ providedIn: 'root' })
export class StarshipListStoreFacade {
  private _store$ = inject(Store);

  private dispatch(action: Action) {
    this._store$.dispatch(action);
  }

  public selectedAllStarshipsList$ = this._store$.pipe(
    select(starshipsListStoreSelectors.getStarshipList)
  );

  public selectedStarshipsListPaginationData$ = this._store$.pipe(
    select(starshipsListStoreSelectors.getStarshipListPaginationData)
  );

  public selectedPendingStatus$ = this._store$.pipe(
    select(starshipsListStoreSelectors.getStarshipListPending)
  );

  public loadStarshipsListStart(url = '', pageNumber: number) {
    this.dispatch(
      StarshipListStoreActions.loadStarshipsListStart({ url, pageNumber })
    );
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      StarshipListStoreActions.loadStarshipsListPending({ isPending })
    );
  }

  public resetStarshipsListState() {
    this.dispatch(StarshipListStoreActions.resetStarshipsListState());
  }
}
