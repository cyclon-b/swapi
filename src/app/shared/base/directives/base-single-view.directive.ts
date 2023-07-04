import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[swapiBaseSingleEntity]',
  standalone: true,
})
export class BaseSingleViewDirective implements OnDestroy {
  ngOnDestroy(): void {}
}
