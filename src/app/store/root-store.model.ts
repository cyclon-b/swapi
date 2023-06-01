import { BaseConfig } from '../shared/services/models/data-access/config.model';
import { MenuItem } from 'primeng/api';

export namespace ActionModel {
  export namespace LoadConfig {
    export interface Success {
      urlConfig: BaseConfig.Endpoints.ApiUrls;
      topMenuConfig: MenuItem[];
    }

    export interface Failure {
      error: any;
    }
  }
}

export namespace ViewModel {
  export interface Config {
    urlConfig: BaseConfig.Endpoints.ApiUrls;
    topMenuConfig: MenuItem[];
  }
}
