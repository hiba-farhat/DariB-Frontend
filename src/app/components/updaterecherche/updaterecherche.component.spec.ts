import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterechercheComponent } from './updaterecherche.component';

describe('UpdaterechercheComponent', () => {
  let component: UpdaterechercheComponent;
  let fixture: ComponentFixture<UpdaterechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
