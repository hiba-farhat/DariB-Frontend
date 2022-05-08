import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updatePasswordComponent } from './update-password.component';

describe('updatePasswordComponent', () => {
  let component: updatePasswordComponent;
  let fixture: ComponentFixture<updatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updatePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(updatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
