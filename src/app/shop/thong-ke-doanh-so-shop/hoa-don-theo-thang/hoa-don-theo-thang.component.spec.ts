import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaDonTheoThangComponent } from './hoa-don-theo-thang.component';

describe('HoaDonTheoThangComponent', () => {
  let component: HoaDonTheoThangComponent;
  let fixture: ComponentFixture<HoaDonTheoThangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaDonTheoThangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaDonTheoThangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
