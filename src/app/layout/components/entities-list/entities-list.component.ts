import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseEntityModel } from '../../../shared/models/base-response.model';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'swapi-entities-list',
  standalone: true,
  imports: [CommonModule, ProgressBarModule],
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitiesListComponent {
  @Input() entitiesLis: BaseEntityModel[];
}
