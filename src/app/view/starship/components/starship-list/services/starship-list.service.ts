import { Injectable } from '@angular/core';
import { BaseContentService } from '../../../../../shared/base/services/xhr/base-content.service';
import { StarshipResponseModel } from '../../../models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipListService extends BaseContentService<StarshipResponseModel> {}
