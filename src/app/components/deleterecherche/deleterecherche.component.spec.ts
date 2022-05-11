import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterechercheComponent } from './deleterecherche.component';

describe('DeleterechercheComponent', () => {
  let component: DeleterechercheComponent;
  let fixture: ComponentFixture<DeleterechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
