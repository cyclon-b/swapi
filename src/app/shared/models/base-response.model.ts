export interface BaseResponseModel {
  count: number;
  next: string;
  previous: string | null;
  results: BaseEntityModel[];
}

export interface BaseEntityModel {
  name: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
}
