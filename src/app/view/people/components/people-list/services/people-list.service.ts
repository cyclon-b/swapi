import { Injectable } from '@angular/core';
import { PersonResponseModel } from '../../models/people-list.model';
import { BaseContentService } from '../../../../../shared/services/xhr/base-content.service';

@Injectable({
  providedIn: 'root',
})
export class PeopleListService extends BaseContentService<PersonResponseModel> {}
