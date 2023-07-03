import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StarshipListService } from '../services/starship-list.service';
import { StarshipListStoreFacade } from './starship-list-store.facade';
import { StarshipListStoreActions } from './starship-list-store.actions';

@Injectable()
export class StarshipListStoreEffects {
  private _actions$ = inject(Actions);
  private _starshipListService = inject(StarshipListService);
  private _starshipListFacade = inject(StarshipListStoreFacade);

  public loadStarshipsList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(StarshipListStoreActions.loadStarshipsListStart),
      tap(_ => this._starshipListFacade.togglePendingStatus(true)),
      switchMap(({ url, pageNumber }) => {
        return this._starshipListService.get(url, pageNumber).pipe(
          map(({ next, results, count, previous }) => {
            return StarshipListStoreActions.loadStarshipsListSuccess({
              paginationData: {
                next,
                previous,
                count,
              },
              entities: results,
            });
          })
        );
      }),
      catchError(e =>
        of(StarshipListStoreActions.loadStarshipsListFailure({ error: e }))
      )
    );
  });
}
