import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMealsComponent } from './history-meals.component';

describe('HistoryMealsComponent', () => {
  let component: HistoryMealsComponent;
  let fixture: ComponentFixture<HistoryMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
