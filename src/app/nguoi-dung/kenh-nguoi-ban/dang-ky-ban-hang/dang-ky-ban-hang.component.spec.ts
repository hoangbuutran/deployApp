import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangKyBanHangComponent } from './dang-ky-ban-hang.component';

describe('DangKyBanHangComponent', () => {
  let component: DangKyBanHangComponent;
  let fixture: ComponentFixture<DangKyBanHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangKyBanHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangKyBanHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
