import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseEntityModel } from '../../../shared/models/base-response.model';

@Component({
  selector: 'swapi-entities-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entities-list.component.html',
  styleUrls: ['./entities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitiesListComponent {
  @Input() entitiesLis: BaseEntityModel[];
}
