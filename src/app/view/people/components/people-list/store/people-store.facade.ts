import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { PeopleStoreActions } from './people-store.actions';
import * as peopleListSelectors from './people-store.selectors';

@Injectable({
  providedIn: 'root',
})
export class PeopleStoreFacade {
  private _store$ = inject(Store);

  public selectedAllPeopleList$ = this._store$.pipe(
    select(peopleListSelectors.getPeopleList)
  );

  public selectedPeoplePaginationData$ = this._store$.pipe(
    select(peopleListSelectors.getPeoplePaginationData)
  );

  public selectedPendingStatus$ = this._store$.pipe(
    select(peopleListSelectors.getPeoplePending)
  );

  public loadPeopleListStart(url = '', pageNumber: number) {
    this.dispatch(PeopleStoreActions.loadPeopleStart({ url, pageNumber }));
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(PeopleStoreActions.loadPeoplePending({ isPending }));
  }

  public resetPeopleListState() {
    this.dispatch(PeopleStoreActions.resetPeopleState());
  }

  private dispatch(action: Action) {
    this._store$.dispatch(action);
  }
}
