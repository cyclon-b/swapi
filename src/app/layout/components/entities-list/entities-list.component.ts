import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
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
  @Output() public changePage = new EventEmitter<PaginatorState>();
  @Output() public openSinglePage = new EventEmitter<{
    name: string;
    url: string;
  }>();

  public currentPage = signal(0);

  public config = inject(ConfigService);

  public trackByUrl(index: number, item: BaseEntityModel): string {
    return item?.url;
  }

  public changePageState(e: PaginatorState) {
    this.currentPage.set(e.page);
  }
}

// TODO: Доделать логику пагинатора для текущего апи
