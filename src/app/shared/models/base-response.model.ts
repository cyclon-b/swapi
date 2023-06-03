export interface BaseResponseModel {
  count: number;
  next: string;
  previous: string | null;
  results: any;
}

export interface BaseEntityModel {
  name: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
}

// TODO: Вынести модели во вьюхи и стейты
export interface PersonResponseModel extends BaseResponseModel {
  results: PersonEntity[];
}

export interface PlanetResponseModel extends BaseResponseModel {
  results: PlanetEntity[];
}

export interface StarshipResponseModel extends BaseResponseModel {
  results: StarshipEntity[];
}

export interface PersonEntity extends BaseEntityModel {
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
