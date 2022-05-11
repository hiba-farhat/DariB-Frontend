import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrechercheComponent } from './listrecherche.component';

describe('ListrechercheComponent', () => {
  let component: ListrechercheComponent;
  let fixture: ComponentFixture<ListrechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
