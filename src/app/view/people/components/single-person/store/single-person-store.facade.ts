import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singlePersonSelectors from './single-person-store.selectors';
import { SinglePersonStoreActions } from './single-person-store.actions';
import { BaseSingleViewStoreFacadeModel } from '../../../../../shared/base/models/base-single-view-store-facade.model';
import { PersonEntity } from '../../../models/people-list.model';

@Injectable({
  providedIn: 'root',
})
export class SinglePersonStoreFacade extends BaseSingleViewStoreFacadeModel<PersonEntity> {
  private _store$ = inject(Store);

  public selectedEntityData$ = this._store$.pipe(
    select(singlePersonSelectors.getPersonData)
  );
  public selectedPendingStatus$ = this._store$.pipe(
    select(singlePersonSelectors.getSinglePersonPending)
  );

  public loadSingleEntityStart(url) {
    this.dispatch(SinglePersonStoreActions.loadSinglePersonStart({ url }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(
      SinglePersonStoreActions.loadSinglePersonPending({ isPending })
    );
  }

  public resetState() {
    this.dispatch(SinglePersonStoreActions.resetSinglePersonState());
  }

  public dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
