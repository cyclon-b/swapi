import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePlanetStoreFacade } from './store/single-planet-store.facade';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { BaseSingleViewDirective } from '../../../../shared/base/directives/base-single-view.directive';

@Component({
  selector: 'swapi-single-planet',
  standalone: true,
  imports: [CommonModule, DividerModule, PanelModule, ProgressBarModule],
  templateUrl: './single-planet.component.html',
  styleUrls: ['./single-planet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePlanetComponent extends BaseSingleViewDirective {
  constructor(override facade: SinglePlanetStoreFacade) {
    super(facade);
  }
}
