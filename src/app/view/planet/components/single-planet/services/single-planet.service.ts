import { Injectable } from '@angular/core';
import { BaseContentService } from '../../../../../shared/base/services/xhr/base-content.service';
import { PlanetEntity } from '../../../models/planet.model';

@Injectable({
  providedIn: 'root',
})
export class SinglePlanetService extends BaseContentService<PlanetEntity> {}
