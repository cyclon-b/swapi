import { Injectable } from '@angular/core';
import { BaseContentService } from '../../../../../shared/services/xhr/base-content.service';
import { StarshipEntity } from '../../../models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class SingleStarshipService extends BaseContentService<StarshipEntity> {}
