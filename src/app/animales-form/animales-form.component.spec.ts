import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesFormComponent } from './animales-form.component';

describe('AnimalesFormComponent', () => {
  let component: AnimalesFormComponent;
  let fixture: ComponentFixture<AnimalesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
