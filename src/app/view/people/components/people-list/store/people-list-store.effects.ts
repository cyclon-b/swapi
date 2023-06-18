import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PeopleListStoreActions } from './people-list-store.actions';
import { RootStoreFacade } from '../../../../../store/root-store.facade';
import { PeopleListService } from '../services/people-list.service';

@Injectable()
export class PeopleListStoreEffects {
  private _actions$ = inject(Actions);
  private _rootFacade = inject(RootStoreFacade);
  private _peopleLitService = inject(PeopleListService);

  public loadPeopleList$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PeopleListStoreActions.loadPeopleListStart),

      switchMap(({ url, pageNumber }) => {
        return this._peopleLitService.getPeopleList(url, pageNumber).pipe(
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
