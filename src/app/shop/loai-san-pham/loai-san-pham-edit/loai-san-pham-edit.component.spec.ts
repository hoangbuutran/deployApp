import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiSanPhamEditComponent } from './loai-san-pham-edit.component';

describe('LoaiSanPhamEditComponent', () => {
  let component: LoaiSanPhamEditComponent;
  let fixture: ComponentFixture<LoaiSanPhamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiSanPhamEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiSanPhamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
