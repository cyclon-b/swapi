import { PlanetEntity } from '../../../models/planet.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url: string;
    }

    export interface Success {
      planetData: PlanetEntity;
    }

    export interface Pending {
      isPending: boolean;
    }

    export interface Failure {
      error: any;
    }
  }
}
