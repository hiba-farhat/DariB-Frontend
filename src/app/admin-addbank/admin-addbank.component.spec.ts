import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddbankComponent } from './admin-addbank.component';

describe('AdminAddbankComponent', () => {
  let component: AdminAddbankComponent;
  let fixture: ComponentFixture<AdminAddbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
