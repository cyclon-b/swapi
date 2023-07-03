import {
  BaseEntityModel,
  BaseResponseModel,
} from '../../../shared/models/base-response.model';

export interface StarshipResponseModel extends BaseResponseModel {
  results: StarshipEntity[];
}

export interface StarshipEntity extends BaseEntityModel {
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: any[];
}
