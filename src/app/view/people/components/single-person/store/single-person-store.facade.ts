import { inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as singlePersonSelectors from './single-person-store.selectors';

@Injectable({
  providedIn: 'root',
})
export class SinglePersonStoreFacade {
  private _store = inject(Store);

  public selectedPersonData$ = this._store.pipe(
    select(singlePersonSelectors.getPersonData)
  );

  private _dispatch(action: Action) {
    this._store.dispatch(action);
  }
}
