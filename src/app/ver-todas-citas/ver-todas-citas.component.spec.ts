import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodasCitasComponent } from './ver-todas-citas.component';

describe('VerTodasCitasComponent', () => {
  let component: VerTodasCitasComponent;
  let fixture: ComponentFixture<VerTodasCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTodasCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTodasCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
