import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent8Component } from './parent8.component';

describe('Parent8Component', () => {
  let component: Parent8Component;
  let fixture: ComponentFixture<Parent8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
