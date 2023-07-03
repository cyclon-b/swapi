import {
  StarshipEntity,
  StarshipResponseModel,
} from '../../../models/starship.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url?: string;
      pageNumber: number;
    }
    export interface Success {
      paginationData: Omit<StarshipResponseModel, 'results'>;
      entities: StarshipEntity[];
    }
    export interface Pending {
      isPending: boolean;
    }
    export interface Failure {
      error: any;
    }
  }
}
