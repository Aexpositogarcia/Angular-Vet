import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisCitasComponent } from './ver-mis-citas.component';

describe('VerMisCitasComponent', () => {
  let component: VerMisCitasComponent;
  let fixture: ComponentFixture<VerMisCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMisCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMisCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
