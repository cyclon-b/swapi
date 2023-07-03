import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singleStarshipStoreSelectors from './single-starship-store.selectors';
import { SingleStarshipStoreActions } from './single-starship-store.actions';

@Injectable({ providedIn: 'root' })
export class SingleStarshipStoreFacade {
  private _store$ = inject(Store);

  public selectedSingleStarshipData$ = this._store$.pipe(
    select(singleStarshipStoreSelectors.getStarshipData)
  );
  public selectedPendingStatus$ = this._store$.pipe(
    select(singleStarshipStoreSelectors.getSingleStarshipPending)
  );

  public loadSingleStarshipStart(url) {
    this.dispatch(SingleStarshipStoreActions.loadSingleStarshipStart({ url }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      SingleStarshipStoreActions.loadSingleStarshipPending({ isPending })
    );
  }

  public resetSingleStarshipState() {
    this.dispatch(SingleStarshipStoreActions.resetSingleStarshipState());
  }

  private dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
