import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { PeopleStoreFacade } from './store/people-store.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListViewDirective } from '../../../../shared/base/directives/base-list-view.directive';

@Component({
  selector: 'swapi-people-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent extends BaseListViewDirective {
  constructor(
    route: ActivatedRoute,
    router: Router,
    facade: PeopleStoreFacade
  ) {
    super(router, route, facade);
  }
}
