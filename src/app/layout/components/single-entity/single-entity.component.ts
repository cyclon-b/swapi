import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'swapi-single-entity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-entity.component.html',
  styleUrls: ['./single-entity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleEntityComponent {}
