import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { PeopleStoreFacade } from './store/people-store.facade';
import { PaginatorState } from 'primeng/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseEntityModel } from '../../../../shared/models/base-response.model';

@Component({
  selector: 'swapi-people-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnDestroy {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  public peopleFacade = inject(PeopleStoreFacade);
  public currentPage = signal(this._route.snapshot.params['id'] - 1);

  async onPageChange($event: PaginatorState) {
    const normalizedPageNumber = $event.page + 1;
    await this._router.navigate(['people', 'page', normalizedPageNumber]);
  }

  onMoreDetailClick = async (e: BaseEntityModel) => {
    await this._router.navigate(['people', 'single-person', e?.url]);
  };

  ngOnDestroy(): void {
    this.peopleFacade.resetPeopleListState();
  }
}
