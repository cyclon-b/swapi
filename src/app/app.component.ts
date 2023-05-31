import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, TopMenuComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'swapi';

  constructor() {}
}

// TODO: 1 Сделать селекторы для конфига, 2 Добавить экшены и селекторы в фасад, 3 добавить редьюсер для конфига, 4
