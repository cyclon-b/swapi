import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singleStarshipStoreSelectors from './single-starship-store.selectors';
import { SingleStarshipStoreActions } from './single-starship-store.actions';
import { BaseSingleViewStoreFacadeModel } from '../../../../../shared/base/models/base-single-view-store-facade.model';
import { StarshipEntity } from '../../../models/starship.model';

@Injectable({ providedIn: 'root' })
export class SingleStarshipStoreFacade extends BaseSingleViewStoreFacadeModel<StarshipEntity> {
  private _store$ = inject(Store);

  public selectedEntityData$ = this._store$.pipe(
    select(singleStarshipStoreSelectors.getStarshipData)
  );
  public selectedPendingStatus$ = this._store$.pipe(
    select(singleStarshipStoreSelectors.getSingleStarshipPending)
  );

  public loadSingleEntityStart(url) {
    this.dispatch(SingleStarshipStoreActions.loadSingleStarshipStart({ url }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      SingleStarshipStoreActions.loadSingleStarshipPending({ isPending })
    );
  }

  public resetState() {
    this.dispatch(SingleStarshipStoreActions.resetSingleStarshipState());
  }

  public dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
