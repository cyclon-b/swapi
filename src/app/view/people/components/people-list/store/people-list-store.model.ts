import { PersonEntity } from '../models/people-list.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url?: string;
    }
    export interface Success {
      entities: PersonEntity[];
    }

    export interface Failure {
      error: any;
    }
  }
}
