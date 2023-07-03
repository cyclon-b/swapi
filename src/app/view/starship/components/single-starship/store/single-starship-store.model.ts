import { StarshipEntity } from '../../../models/starship.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url: string;
    }

    export interface Success {
      starshipData: StarshipEntity;
    }

    export interface Pending {
      isPending: boolean;
    }

    export interface Failure {
      error: any;
    }
  }
}
