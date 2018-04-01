import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent7Component } from './parent7.component';

describe('Parent7Component', () => {
  let component: Parent7Component;
  let fixture: ComponentFixture<Parent7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
