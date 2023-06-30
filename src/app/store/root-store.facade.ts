import { inject, Inject, Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { RootStoreConfigActions } from './root-store.actions';
import * as rootStoreSelectors from './root-store.selectors';

@Injectable({
  providedIn: 'root',
})
export class RootStoreFacade {
  private _store = inject(Store);

  public selectedUrlConfig$ = this._store.pipe(
    select(rootStoreSelectors.Config.getUrlConfig)
  );

  public selectedTopMenuConfig$ = this._store.pipe(
    select(rootStoreSelectors.Config.getTopMenuConfig)
  );

  public selectedRouteParams$ = this._store.pipe(
    select(rootStoreSelectors.Router.getRouteParams)
  );

  public getConfig() {
    this.dispatch(RootStoreConfigActions.loadConfigStart());
  }

  private dispatch(action: Action) {
    this._store.dispatch(action);
  }
}
