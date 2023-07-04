import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseEntityModel,
  BaseResponseModel,
} from '../../../shared/models/base-response.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ConfigService } from '../../../shared/services/utils/config.service';

@Component({
  selector: 'swapi-entities-list',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarModule,
    CardModule,
    ButtonModule,
    PaginatorModule,
  ],
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitiesListComponent {
  @Input() public entitiesLis: BaseEntityModel[] = [];
  @Input() public paginationData: Omit<BaseResponseModel, 'results'>;
  @Input() public currentPage: number;
  @Input() public paginatorEnabled: boolean;
  @Input() public entitiesListPending: boolean;
  @Input() public moreDetailHandler: Function;
  @Input() public listTitle: string;
  @Input() public categoryUrl: string;
  @Input() public subCategoryUrl: string;
  @Output() public changePage = new EventEmitter<PaginatorState>();
  @Output() public openSinglePage = new EventEmitter<{
    name: string;
    url: string;
  }>();

  public config = inject(ConfigService);

  constructor() {
    this.moreDetailHandler = v => v;
  }

  public trackByUrl(index: number, item: BaseEntityModel): string {
    return item?.url;
  }
}

// TODO: Доделать логику пагинатора для текущего апи добавить router state
