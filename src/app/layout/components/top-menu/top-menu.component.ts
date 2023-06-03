import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'swapi-top-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent {
  @Input() public menuItems: MenuItem[];
}
