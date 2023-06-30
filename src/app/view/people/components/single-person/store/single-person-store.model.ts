import { PersonEntity } from '../../models/people-list.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url: string;
    }

    export interface Success {
      personData: PersonEntity;
    }

    export interface Pending {
      isPending: boolean;
    }

    export interface Failure {
      error: any;
    }
  }
}
