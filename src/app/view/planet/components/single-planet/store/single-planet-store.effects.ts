import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SinglePlanetStoreActions } from './single-planet-store.actions';
import { SinglePlanetStoreFacade } from './single-planet-store.facade';
import { SinglePlanetService } from '../services/single-planet.service';

@Injectable()
export class SinglePlanetStoreEffects {
  private _actions$ = inject(Actions);
  private _singlePlanetFacade = inject(SinglePlanetStoreFacade);
  private _singlePlanetService = inject(SinglePlanetService);

  public loadSinglePlanetData$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(SinglePlanetStoreActions.loadSinglePlanetStart),
      tap(_ => this._singlePlanetFacade.togglePendingStatus(true)),
      switchMap(({ url }) =>
        this._singlePlanetService
          .get(url)
          .pipe(
            map(planetData =>
              SinglePlanetStoreActions.loadSinglePlanetSuccess({ planetData })
            )
          )
      ),
      catchError(e =>
        of(SinglePlanetStoreActions.loadSinglePlanetFailure({ error: e }))
      )
    );
  });
}
