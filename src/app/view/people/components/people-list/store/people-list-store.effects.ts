import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PeopleListStoreActions } from './people-list-store.actions';
import { PeopleListService } from '../services/people-list.service';
import { PeopleListStoreFacade } from './people-list-store.facade';

@Injectable()
export class PeopleListStoreEffects {
  private _actions$ = inject(Actions);
  private _peopleLitService = inject(PeopleListService);
  private _peopleListFacade = inject(PeopleListStoreFacade);

  public loadPeopleList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PeopleListStoreActions.loadPeopleListStart),
      tap(_ => this._peopleListFacade.togglePendingStatus(true)),
      switchMap(({ url, pageNumber }) => {
        return this._peopleLitService.get(url, pageNumber).pipe(
          map(({ next, results, count, previous }) => {
            return PeopleListStoreActions.loadPeopleListSuccess({
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
        of(PeopleListStoreActions.loadPeopleListFailure({ error: e }))
      )
    );
  });
}
