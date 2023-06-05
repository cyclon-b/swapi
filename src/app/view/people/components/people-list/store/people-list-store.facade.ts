import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { PeopleListStoreActions } from './people-list-store.actions';
import * as peopleListSelectors from './people-list-store.selectors';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleListStoreFacade {
  private _store = inject(Store);

  public selectedAllPeopleList$ = this._store.pipe(
    select(peopleListSelectors.getPeopleList)
  );

  public loadPeopleListStart(url = '') {
    this.dispatch(PeopleListStoreActions.loadPeopleListStart({ url }));
  }

  public dispatch(action: Action) {
    this._store.dispatch(action);
  }
}
