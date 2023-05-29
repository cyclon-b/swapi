import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConfigService } from '../shared/services/utils/config.service';
import * as rootActions from './root-store.actions';
import { RootStoreConfigActions } from './root-store.actions';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RootStoreEffects {
  private _actions$ = inject(Actions);
  private _configService = inject(ConfigService);

  public loadConfig$ = createEffect(() =>
    this._actions$.pipe(
      ofType(RootStoreConfigActions.loadConfigStart),
      switchMap(() =>
        this._configService
          .getUrlConfig()
          .pipe(
            map(response =>
              rootActions.RootStoreConfigActions.loadConfigSuccess(response)
            )
          )
      )
    )
  );
}
