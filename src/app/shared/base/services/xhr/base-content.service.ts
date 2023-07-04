import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  BaseEntityModel,
  BaseResponseModel,
} from '../../models/base-response.model';

@Injectable()
export class BaseContentService<T extends BaseResponseModel | BaseEntityModel> {
  private _http = inject(HttpClient);

  public get(url: string, pageNumber?: number): Observable<T> {
    const params = pageNumber
      ? new HttpParams().append('page', pageNumber)
      : null;
    return this._http
      .get(url, {
        params,
      })
      .pipe(map((resp: T) => resp));
  }
}
