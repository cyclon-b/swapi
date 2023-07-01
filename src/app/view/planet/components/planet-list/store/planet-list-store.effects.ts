import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { PlanetListStoreActions } from './planet-list-store.actions';
import { PeopleListService } from '../../../../people/components/people-list/services/people-list.service';
import { PeopleStoreFacade } from '../../../../people/components/people-list/store/people-store.facade';
import { PeopleStoreActions } from '../../../../people/components/people-list/store/people-store.actions';
import { PlanetListService } from '../services/planet-list.service';
import { PlanetListStoreFacade } from './planet-list-store.facade';

@Injectable()
export class PlanetListStoreEffects {
  private _actions$ = inject(Actions);
  private _planetListService = inject(PlanetListService);
  private _planetListFacade = inject(PlanetListStoreFacade);

  public loadPeopleList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PlanetListStoreActions.loadPlanetsListStart),
      tap(_ => this._planetListFacade.togglePendingStatus(true)),
      switchMap(({ url, pageNumber }) => {
        return this._planetListService.get(url, pageNumber).pipe(
          map(({ next, results, count, previous }) => {
            return PlanetListStoreActions.loadPlanetsListSuccess({
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
        of(PlanetListStoreActions.loadPlanetsListFailure({ error: e }))
      )
    );
  });
}
