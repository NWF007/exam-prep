import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote4Component } from './quote4.component';

describe('Quote4Component', () => {
  let component: Quote4Component;
  let fixture: ComponentFixture<Quote4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
