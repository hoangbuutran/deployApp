import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaDonTrongKhoangThangComponent } from './hoa-don-trong-khoang-thang.component';

describe('HoaDonTrongKhoangThangComponent', () => {
  let component: HoaDonTrongKhoangThangComponent;
  let fixture: ComponentFixture<HoaDonTrongKhoangThangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaDonTrongKhoangThangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaDonTrongKhoangThangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
