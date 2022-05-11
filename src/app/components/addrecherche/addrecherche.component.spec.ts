import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrechercheComponent } from './addrecherche.component';

describe('AddrechercheComponent', () => {
  let component: AddrechercheComponent;
  let fixture: ComponentFixture<AddrechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
