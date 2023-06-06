import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { PeopleListStoreFacade } from './store/people-list-store.facade';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'swapi-people-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent {
  public peopleFacade = inject(PeopleListStoreFacade);

  onPageChange($event: PaginatorState) {
    console.warn($event);
  }
}
