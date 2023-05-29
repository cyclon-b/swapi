import { BaseConfig } from '../shared/services/models/data-access/config.model';

export namespace ActionModel {
  export namespace LoadConfig {
    export type Success = BaseConfig.Endpoints.ApiUrls;


    export interface Failure {
      error: any;
    }
  }
}

export namespace ViewModel {
  export interface Config {
    urlConfig: BaseConfig.Endpoints.ApiUrls;
  }
}
