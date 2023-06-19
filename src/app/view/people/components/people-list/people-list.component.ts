import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { PeopleListStoreFacade } from './store/people-list-store.facade';
import { PaginatorState } from 'primeng/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'swapi-people-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  public peopleFacade = inject(PeopleListStoreFacade);
  public currentPage = this._route.snapshot.params['id'] - 1;

  async onPageChange($event: PaginatorState) {
    const normalizedPageNumber = $event.page + 1;
    await this._router.navigate(['people', 'page', normalizedPageNumber]);
  }
}
