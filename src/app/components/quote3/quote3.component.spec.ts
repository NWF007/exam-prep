import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote3Component } from './quote3.component';

describe('Quote3Component', () => {
  let component: Quote3Component;
  let fixture: ComponentFixture<Quote3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
