import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetListStoreFacade } from './store/planet-list-store.facade';
import { BaseListViewDirective } from '../../../../shared/base/directives/base-list-view.directive';

@Component({
  selector: 'swapi-planet-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetListComponent extends BaseListViewDirective {
  constructor(
    router: Router,
    route: ActivatedRoute,
    facade: PlanetListStoreFacade
  ) {
    super(router, route, facade);
  }
}
