import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPham5MaxNgayComponent } from './san-pham5-max-ngay.component';

describe('SanPham5MaxNgayComponent', () => {
  let component: SanPham5MaxNgayComponent;
  let fixture: ComponentFixture<SanPham5MaxNgayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPham5MaxNgayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPham5MaxNgayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
