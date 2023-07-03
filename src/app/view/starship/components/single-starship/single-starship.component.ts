import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SinglePlanetStoreFacade } from '../../../planet/components/single-planet/store/single-planet-store.facade';
import { SingleStarshipStoreFacade } from './store/single-starship-store.facade';

@Component({
  selector: 'swapi-single-starship',
  standalone: true,
  imports: [CommonModule, DividerModule, PanelModule, ProgressBarModule],
  templateUrl: './single-starship.component.html',
  styleUrls: ['./single-starship.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleStarshipComponent {
  public singleStarshipStoreFacade = inject(SingleStarshipStoreFacade);

  ngOnDestroy(): void {
    this.singleStarshipStoreFacade.resetSingleStarshipState();
  }
}
