import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrnkytPage } from './urnkyt.page';

describe('UrnkytPage', () => {
  let component: UrnkytPage;
  let fixture: ComponentFixture<UrnkytPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrnkytPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrnkytPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
