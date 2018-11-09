import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNguoiDungComponent } from './home-nguoi-dung.component';

describe('HomeNguoiDungComponent', () => {
  let component: HomeNguoiDungComponent;
  let fixture: ComponentFixture<HomeNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
