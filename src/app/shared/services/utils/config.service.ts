import { inject, Injectable } from '@angular/core';
import { TOP_MENU_ITEMS, URL_CONFIG } from '../../../../assets/data/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseConfig } from '../models/data-access/config.model';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _http = inject(HttpClient);

  private getRootApi(): string {
    return URL_CONFIG.rootApi;
  }

  public getTopMenuConfig(): MenuItem[] {
    return TOP_MENU_ITEMS;
  }

  public getUrlConfig(): Observable<BaseConfig.Endpoints.ApiUrls> {
    return this._http.get<BaseConfig.Endpoints.ApiUrls>(this.getRootApi());
  }
}
