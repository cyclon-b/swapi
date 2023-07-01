import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePlanetStoreFacade } from './store/single-planet-store.facade';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'swapi-single-planet',
  standalone: true,
  imports: [CommonModule, DividerModule, PanelModule, ProgressBarModule],
  templateUrl: './single-planet.component.html',
  styleUrls: ['./single-planet.component.scss'],
})
export class SinglePlanetComponent implements OnDestroy {
  public singlePlanetFacade = inject(SinglePlanetStoreFacade);

  ngOnDestroy(): void {
    this.singlePlanetFacade.resetSinglePlanetState();
  }
}
