import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiSanPhamAddComponent } from './loai-san-pham-add.component';

describe('LoaiSanPhamAddComponent', () => {
  let component: LoaiSanPhamAddComponent;
  let fixture: ComponentFixture<LoaiSanPhamAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiSanPhamAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiSanPhamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
