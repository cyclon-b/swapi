import { Component, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesListComponent } from '../../../../layout/components/entities-list/entities-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { BaseEntityModel } from '../../../../shared/models/base-response.model';
import { PlanetListStoreFacade } from './store/planet-list-store.facade';

@Component({
  selector: 'swapi-planet-list',
  standalone: true,
  imports: [CommonModule, EntitiesListComponent],
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
})
export class PlanetListComponent implements OnDestroy {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  public planetFacade = inject(PlanetListStoreFacade);
  public currentPage = signal(this._route.snapshot.params['id'] - 1);

  async onPageChange($event: PaginatorState) {
    const normalizedPageNumber = $event.page + 1;
    await this._router.navigate(['planet', 'page', normalizedPageNumber]);
  }

  onMoreDetailClick = async (e: BaseEntityModel) => {
    await this._router.navigate(['planet', 'single-planet', e?.url]);
  };

  ngOnDestroy(): void {
    this.planetFacade.resetPlanetListState();
  }
}
