import { Directive, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListViewStoreFacadeModel } from '../models/base-list-view-store-facade.model';
import {
  BaseEntityModel,
  BaseResponseModel,
} from '../models/base-response.model';
import { PaginatorState } from 'primeng/paginator';

@Directive({
  selector: '[swapiBaseListView]',
  standalone: true,
})
export class BaseListViewDirective implements OnDestroy {
  public currentPage = signal(this.route.snapshot.params['id'] - 1);

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    public facade: BaseListViewStoreFacadeModel<
      BaseResponseModel,
      BaseEntityModel
    >
  ) {}

  async onPageChange($event: PaginatorState, categorySegment: string) {
    const normalizedPageNumber = $event.page + 1;
    await this.router.navigate([categorySegment, 'page', normalizedPageNumber]);
  }

  onMoreDetailClick = async (
    e: BaseEntityModel,
    categorySegment: string,
    singleSegment: string
  ) => {
    await this.router.navigate([categorySegment, singleSegment, e?.url]);
  };

  ngOnDestroy(): void {
    this.facade.resetState();
  }
}
