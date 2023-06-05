import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConfigService } from '../shared/services/utils/config.service';
import { RootStoreConfigActions } from './root-store.actions';
import { of, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// TODO: Разделить полусение меню и урлов
@Injectable()
export class RootStoreEffects {
  private _actions$ = inject(Actions);
  private _configService = inject(ConfigService);

  public loadConfig$ = createEffect(() =>
    this._actions$.pipe(
      ofType(RootStoreConfigActions.loadConfigStart),
      switchMap(() =>
        this._configService.getUrlConfig().pipe(
          map(response =>
            RootStoreConfigActions.loadConfigSuccess({
              urlConfig: response,
              topMenuConfig: this._configService.getTopMenuConfig(),
            })
          )
        )
      ),
      catchError(e =>
        of(RootStoreConfigActions.loadConfigFailure({ error: e }))
      )
    )
  );
}
