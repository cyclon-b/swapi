import {
  BaseEntityModel,
  BaseResponseModel,
} from '../../../shared/models/base-response.model';

export interface PersonResponseModel extends BaseResponseModel {
  results: PersonEntity[];
}

export interface PersonEntity extends BaseEntityModel {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string[];
  vehicles: string[];
  starships: string[];
}
