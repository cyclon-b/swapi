import { Injectable } from '@angular/core';
import { BaseContentService } from '../../../../../shared/services/xhr/base-content.service';
import { PlanetResponseModel } from '../../../models/planet.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetListService extends BaseContentService<PlanetResponseModel> {}
