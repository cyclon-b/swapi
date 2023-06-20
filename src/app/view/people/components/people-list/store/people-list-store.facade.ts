import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { PeopleListStoreActions } from './people-list-store.actions';
import * as peopleListSelectors from './people-list-store.selectors';

@Injectable({
  providedIn: 'root',
})
export class PeopleListStoreFacade {
  private _store = inject(Store);

  public selectedAllPeopleList$ = this._store.pipe(
    select(peopleListSelectors.getPeopleList)
  );

  public selectedPeoplePaginationData$ = this._store.pipe(
    select(peopleListSelectors.getPeoplePaginationData)
  );

  public selectedPendingStatus$ = this._store.pipe(
    select(peopleListSelectors.getPeoplePending)
  );

  public loadPeopleListStart(url = '', pageNumber: number) {
    this.dispatch(
      PeopleListStoreActions.loadPeopleListStart({ url, pageNumber })
    );
  }

  public togglePendingStatus(isPending: boolean) {
    this.dispatch(PeopleListStoreActions.loadPeopleListPending({ isPending }));
  }

  public resetPeopleListState() {
    this.dispatch(PeopleListStoreActions.resetPeopleListState());
  }

  public dispatch(action: Action) {
    this._store.dispatch(action);
  }
}
