import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuCungNguoiDungHomeComponent } from './thu-cung-nguoi-dung-home.component';

describe('ThuCungNguoiDungHomeComponent', () => {
  let component: ThuCungNguoiDungHomeComponent;
  let fixture: ComponentFixture<ThuCungNguoiDungHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuCungNguoiDungHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuCungNguoiDungHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
