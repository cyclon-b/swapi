import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponent } from './people-list.component';

describe('PeopleComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PeopleListComponent],
    });
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
