import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiSanPhamListComponent } from './loai-san-pham-list.component';

describe('LoaiSanPhamListComponent', () => {
  let component: LoaiSanPhamListComponent;
  let fixture: ComponentFixture<LoaiSanPhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiSanPhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiSanPhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
