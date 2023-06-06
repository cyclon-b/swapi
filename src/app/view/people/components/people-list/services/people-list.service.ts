import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PersonEntity, PersonResponseModel } from '../models/people-list.model';
import { Observable } from 'rxjs';
import { BaseResponseModel } from '../../../../../shared/models/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleListService {
  private _http = inject(HttpClient);

  public getPeopleList(url: string): Observable<PersonResponseModel> {
    console.warn(url);
    return this._http.get(url).pipe(map((resp: PersonResponseModel) => resp));
  }
}
