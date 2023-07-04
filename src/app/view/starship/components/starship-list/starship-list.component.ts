import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { BaseEntityModel } from '../../../../shared/models/base-response.model';
import { StarshipListStoreFacade } from './store/starship-list-store.facade';
import { BaseListViewDirective } from '../../../../shared/base/directives/base-list-view.directive';

@Component({
  selector: 'swapi-starship-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipListComponent extends BaseListViewDirective {
  constructor(
    router: Router,
    route: ActivatedRoute,
    facade: StarshipListStoreFacade
  ) {
    super(router, route, facade);
  }
}
