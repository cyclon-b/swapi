import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesListComponent } from './entities-list.component';

describe('EntitiesListComponent', () => {
  let component: EntitiesListComponent;
  let fixture: ComponentFixture<EntitiesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EntitiesListComponent]
    });
    fixture = TestBed.createComponent(EntitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
