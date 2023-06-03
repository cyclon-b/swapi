import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'swapi-single-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePersonComponent {}
