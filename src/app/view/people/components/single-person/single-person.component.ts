import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { BaseSingleViewDirective } from '../../../../shared/base/directives/base-single-view.directive';
import { SinglePersonStoreFacade } from './store/single-person-store.facade';

@Component({
  selector: 'swapi-single-person',
  standalone: true,
  imports: [CommonModule, DividerModule, ProgressBarModule, PanelModule],
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePersonComponent extends BaseSingleViewDirective {
  constructor(override facade: SinglePersonStoreFacade) {
    super(facade);
  }
}
