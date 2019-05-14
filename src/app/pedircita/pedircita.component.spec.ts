import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedircitaComponent } from './pedircita.component';

describe('PedircitaComponent', () => {
  let component: PedircitaComponent;
  let fixture: ComponentFixture<PedircitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedircitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedircitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
