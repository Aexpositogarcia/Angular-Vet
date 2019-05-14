import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VercitasVeterinarioComponent } from './vercitas-veterinario.component';

describe('VercitasVeterinarioComponent', () => {
  let component: VercitasVeterinarioComponent;
  let fixture: ComponentFixture<VercitasVeterinarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercitasVeterinarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VercitasVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
