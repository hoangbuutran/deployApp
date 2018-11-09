import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuCungDetailWithKhachHangComponent } from './thu-cung-detail-with-khach-hang.component';

describe('ThuCungDetailWithKhachHangComponent', () => {
  let component: ThuCungDetailWithKhachHangComponent;
  let fixture: ComponentFixture<ThuCungDetailWithKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuCungDetailWithKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuCungDetailWithKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
