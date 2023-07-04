import { Directive, OnDestroy } from '@angular/core';
import { BaseSingleViewStoreFacadeModel } from '../models/base-single-view-store-facade.model';
import { BaseEntityModel } from '../models/base-response.model';

@Directive({
  selector: '[swapiBaseSingleEntity]',
  standalone: true,
})
export class BaseSingleViewDirective implements OnDestroy {
  constructor(public facade: BaseSingleViewStoreFacadeModel<BaseEntityModel>) {}

  ngOnDestroy(): void {
    this.facade.resetState();
  }
}
