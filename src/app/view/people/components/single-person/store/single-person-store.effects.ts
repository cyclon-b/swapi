import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { SinglePersonStoreActions } from './single-person-store.actions';

@Injectable()
export class SinglePersonStoreEffects {
  constructor(private actions$: Actions) {}
}
