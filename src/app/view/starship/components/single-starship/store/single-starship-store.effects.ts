import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SingleStarshipStoreFacade } from './single-starship-store.facade';
import { SingleStarshipService } from '../services/single-starship.service';
import { SingleStarshipStoreActions } from './single-starship-store.actions';

@Injectable()
export class SingleStarshipStoreEffects {
  private _actions$ = inject(Actions);
  private _singleStarshipFacade = inject(SingleStarshipStoreFacade);
  private _singleStarshipService = inject(SingleStarshipService);

  public loadSingleStarshipData$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(SingleStarshipStoreActions.loadSingleStarshipStart),
      tap(_ => this._singleStarshipFacade.togglePendingStatus(true)),
      switchMap(({ url }) =>
        this._singleStarshipService.get(url).pipe(
          map(starshipData =>
            SingleStarshipStoreActions.loadSingleStarshipSuccess({
              starshipData,
            })
          )
        )
      ),
      catchError(e =>
        of(SingleStarshipStoreActions.loadSingleStarshipFailure({ error: e }))
      )
    );
  });
}
