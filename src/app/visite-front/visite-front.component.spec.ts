import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteFrontComponent } from './visite-front.component';

describe('VisiteFrontComponent', () => {
  let component: VisiteFrontComponent;
  let fixture: ComponentFixture<VisiteFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
