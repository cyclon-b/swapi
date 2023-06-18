import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PersonResponseModel } from '../models/people-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleListService {
  private _http = inject(HttpClient);

  public getPeopleList(
    url: string,
    pageNumber: number
  ): Observable<PersonResponseModel> {
    const params = new HttpParams().append('page', pageNumber);
    return this._http
      .get(url, {
        params,
      })
      .pipe(map((resp: PersonResponseModel) => resp));
  }
}
