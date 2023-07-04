import {
  BaseEntityModel,
  BaseResponseModel,
} from '../../../shared/base/models/base-response.model';

export interface PlanetResponseModel extends BaseResponseModel {
  results: PlanetEntity[];
}
export interface PlanetEntity extends BaseEntityModel {
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
}
