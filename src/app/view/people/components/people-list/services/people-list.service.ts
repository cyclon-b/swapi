import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PersonEntity, PersonResponseModel } from '../models/people-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleListService {
  private _http = inject(HttpClient);

  public getPeopleList(url: string): Observable<PersonEntity[]> {
    return this._http
      .get(url)
      .pipe(map((resp: PersonResponseModel) => resp?.results));
  }
}
