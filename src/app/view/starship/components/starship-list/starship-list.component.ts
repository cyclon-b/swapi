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

@Component({
  selector: 'swapi-starship-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipListComponent implements OnDestroy {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  public starshipListFacade = inject(StarshipListStoreFacade);
  public currentPage = signal(this._route.snapshot.params['id'] - 1);

  async onPageChange($event: PaginatorState) {
    const normalizedPageNumber = $event.page + 1;
    await this._router.navigate(['starship', 'page', normalizedPageNumber]);
  }

  onMoreDetailClick = async (e: BaseEntityModel) => {
    await this._router.navigate(['starship', 'single-starship', e?.url]);
  };

  ngOnDestroy(): void {
    this.starshipListFacade.resetStarshipsListState();
  }
}
