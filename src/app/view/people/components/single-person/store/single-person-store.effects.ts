import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SinglePersonStoreActions } from './single-person-store.actions';
import { SinglePersonStoreFacade } from './single-person-store.facade';
import { SinglePersonService } from '../services/single-person.service';

@Injectable()
export class SinglePersonStoreEffects {
  private _actions$ = inject(Actions);
  private _singlePersonFacade = inject(SinglePersonStoreFacade);
  private _singlePersonService = inject(SinglePersonService);

  public loadSinglePersonData$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(SinglePersonStoreActions.loadSinglePersonStart),
      tap(_ => this._singlePersonFacade.togglePendingStatus(true)),
      switchMap(({ url }) =>
        this._singlePersonService
          .get(url)
          .pipe(
            map(personData =>
              SinglePersonStoreActions.loadSinglePersonSuccess({ personData })
            )
          )
      ),
      catchError(e =>
        of(SinglePersonStoreActions.loadSinglePersonFailure({ error: e }))
      )
    );
  });
}
