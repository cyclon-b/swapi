import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseEntityModel } from '../../../shared/models/base-response.model';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'swapi-entities-list',
  standalone: true,
  imports: [CommonModule, ProgressBarModule, CardModule, ButtonModule],
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitiesListComponent {
  @Input() entitiesLis: BaseEntityModel[] = [];

  trackByUrl(index: number, item: BaseEntityModel) {
    return item?.url;
  }
}
