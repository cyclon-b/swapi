import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'swapi-top-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {

  public items: MenuItem[] = [
    {label: 'Home', icon: 'pi-home pi pi-fw', routerLink: [''] }
  ]

}
