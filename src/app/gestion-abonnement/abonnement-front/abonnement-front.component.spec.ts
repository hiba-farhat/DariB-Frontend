import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementFrontComponent } from './abonnement-front.component';

describe('AbonnementFrontComponent', () => {
  let component: AbonnementFrontComponent;
  let fixture: ComponentFixture<AbonnementFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
