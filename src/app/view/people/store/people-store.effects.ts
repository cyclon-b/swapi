import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { PeopleStoreActions } from './people-store.actions';


@Injectable()
export class PeopleStoreEffects {

  yPeopleStores$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(PeopleStoreActions.yPeopleStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PeopleStoreActions.yPeopleStoresSuccess({ data })),
          catchError(error => of(PeopleStoreActions.yPeopleStoresFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
