import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { HomeStoreActions } from './home-store.actions';


@Injectable()
export class HomeStoreEffects {

  loadHomeStores$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeStoreActions.loadHomeStores),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => HomeStoreActions.loadHomeStoresSuccess({ data })),
          catchError(error => of(HomeStoreActions.loadHomeStoresFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
