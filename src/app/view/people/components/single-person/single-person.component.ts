import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PeopleStoreFacade } from '../people-list/store/people-store.facade';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { Observable } from 'rxjs';
import { PersonEntity } from '../models/people-list.model';
import { DividerModule } from 'primeng/divider';
import { SinglePersonStoreFacade } from './store/single-person-store.facade';

@Component({
  selector: 'swapi-single-person',
  standalone: true,
  imports: [CommonModule, FieldsetModule, CardModule, DividerModule],
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePersonComponent implements OnInit, OnDestroy {
  private _route = inject(ActivatedRoute);
  public singlePersonFacade = inject(SinglePersonStoreFacade);

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
