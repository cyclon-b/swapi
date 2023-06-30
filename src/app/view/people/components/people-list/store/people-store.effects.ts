import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PeopleStoreActions } from './people-store.actions';
import { PeopleListService } from '../services/people-list.service';
import { PeopleStoreFacade } from './people-store.facade';

@Injectable()
export class PeopleStoreEffects {
  private _actions$ = inject(Actions);
  private _peopleLitService = inject(PeopleListService);
  private _peopleListFacade = inject(PeopleStoreFacade);

  public loadPeopleList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PeopleStoreActions.loadPeopleStart),
      tap(_ => this._peopleListFacade.togglePendingStatus(true)),
      switchMap(({ url, pageNumber }) => {
        return this._peopleLitService.get(url, pageNumber).pipe(
          map(({ next, results, count, previous }) => {
            return PeopleStoreActions.loadPeopleSuccess({
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
      catchError(e => of(PeopleStoreActions.loadPeopleFailure({ error: e })))
    );
  });
}
