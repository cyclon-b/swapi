import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singlePersonSelectors from './single-person-store.selectors';
import { SinglePersonStoreActions } from './single-person-store.actions';

@Injectable({
  providedIn: 'root',
})
export class SinglePersonStoreFacade {
  private _store$ = inject(Store);

  public selectedSinglePersonData$ = this._store$.pipe(
    select(singlePersonSelectors.getPersonData)
  );
  public selectedPendingStatus$ = this._store$.pipe(
    select(singlePersonSelectors.getSinglePersonPending)
  );

  public loadSinglePersonStart(url) {
    this.dispatch(SinglePersonStoreActions.loadSinglePersonStart({ url }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      SinglePersonStoreActions.loadSinglePersonPending({ isPending })
    );
  }

  public resetSinglePersonState() {
    this.dispatch(SinglePersonStoreActions.resetSinglePersonState());
  }

  private dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
