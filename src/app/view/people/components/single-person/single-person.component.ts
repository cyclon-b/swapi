import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { SinglePersonStoreFacade } from './store/single-person-store.facade';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'swapi-single-person',
  standalone: true,
  imports: [CommonModule, DividerModule, ProgressBarModule, PanelModule],
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePersonComponent implements OnDestroy {
  public singlePersonFacade = inject(SinglePersonStoreFacade);

  ngOnDestroy(): void {
    this.singlePersonFacade.resetSinglePersonState();
  }
}
