import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatDongDetailComponent } from './hoat-dong-detail.component';

describe('HoatDongDetailComponent', () => {
  let component: HoatDongDetailComponent;
  let fixture: ComponentFixture<HoatDongDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoatDongDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatDongDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
