import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XemLoaiSanPhamShopComponent } from './xem-loai-san-pham-shop.component';

describe('XemLoaiSanPhamShopComponent', () => {
  let component: XemLoaiSanPhamShopComponent;
  let fixture: ComponentFixture<XemLoaiSanPhamShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XemLoaiSanPhamShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XemLoaiSanPhamShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
