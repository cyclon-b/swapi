import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { RootStoreFacade } from '../../store/root-store.facade';

@Component({
  selector: 'swapi-top-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  public rootFacade = inject(RootStoreFacade);
}
