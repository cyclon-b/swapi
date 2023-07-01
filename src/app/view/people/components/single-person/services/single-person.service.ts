import { Injectable } from '@angular/core';
import { BaseContentService } from '../../../../../shared/services/xhr/base-content.service';
import { PersonEntity } from '../../../models/people-list.model';

@Injectable({
  providedIn: 'root',
})
export class SinglePersonService extends BaseContentService<PersonEntity> {}
