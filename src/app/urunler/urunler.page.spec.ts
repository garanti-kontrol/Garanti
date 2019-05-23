import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunlerPage } from './urunler.page';

describe('UrunlerPage', () => {
  let component: UrunlerPage;
  let fixture: ComponentFixture<UrunlerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunlerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
