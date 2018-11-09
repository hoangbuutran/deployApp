import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatDongHomeComponent } from './hoat-dong-home.component';

describe('HoatDongHomeComponent', () => {
  let component: HoatDongHomeComponent;
  let fixture: ComponentFixture<HoatDongHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoatDongHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatDongHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
