import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassNguoiDungComponent } from './change-pass-nguoi-dung.component';

describe('ChangePassNguoiDungComponent', () => {
  let component: ChangePassNguoiDungComponent;
  let fixture: ComponentFixture<ChangePassNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
