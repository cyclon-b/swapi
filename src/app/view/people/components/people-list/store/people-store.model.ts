import {
  PersonEntity,
  PersonResponseModel,
} from '../../models/people-list.model';

export namespace ActionModel {
  export namespace Load {
    export interface Start {
      url?: string;
      pageNumber: number;
    }
    export interface Success {
      paginationData: Omit<PersonResponseModel, 'results'>;
      entities: PersonEntity[];
    }
    export interface Pending {
      isPending: boolean;
    }
    export interface Failure {
      error: any;
    }
  }
}
