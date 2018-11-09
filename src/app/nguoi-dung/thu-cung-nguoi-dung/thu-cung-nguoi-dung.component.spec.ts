import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuCungNguoiDungComponent } from './thu-cung-nguoi-dung.component';

describe('ThuCungNguoiDungComponent', () => {
  let component: ThuCungNguoiDungComponent;
  let fixture: ComponentFixture<ThuCungNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuCungNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuCungNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
