import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemicLoadComponent } from './glycemic-load.component';

describe('GlycemicLoadComponent', () => {
  let component: GlycemicLoadComponent;
  let fixture: ComponentFixture<GlycemicLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlycemicLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlycemicLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
