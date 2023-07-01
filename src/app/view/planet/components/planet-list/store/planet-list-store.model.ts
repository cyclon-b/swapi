import {
  PlanetEntity,
  PlanetResponseModel,
} from '../../../models/planet.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url?: string;
      pageNumber: number;
    }
    export interface Success {
      paginationData: Omit<PlanetResponseModel, 'results'>;
      entities: PlanetEntity[];
    }
    export interface Pending {
      isPending: boolean;
    }
    export interface Failure {
      error: any;
    }
  }
}
