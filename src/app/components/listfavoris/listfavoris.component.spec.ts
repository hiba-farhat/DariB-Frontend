import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfavorisComponent } from './listfavoris.component';

describe('ListfavorisComponent', () => {
  let component: ListfavorisComponent;
  let fixture: ComponentFixture<ListfavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfavorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
