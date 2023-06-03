import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './layout/components/top-menu/top-menu.component';
import { RootStoreFacade } from './store/root-store.facade';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TopMenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public rootFacade = inject(RootStoreFacade);
}
