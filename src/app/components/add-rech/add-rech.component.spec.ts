import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRechComponent } from './add-rech.component';

describe('AddRechComponent', () => {
  let component: AddRechComponent;
  let fixture: ComponentFixture<AddRechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
