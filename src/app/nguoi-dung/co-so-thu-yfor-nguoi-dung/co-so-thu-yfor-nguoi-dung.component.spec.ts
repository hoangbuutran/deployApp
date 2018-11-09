import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThuYforNguoiDungComponent } from './co-so-thu-yfor-nguoi-dung.component';

describe('CoSoThuYforNguoiDungComponent', () => {
  let component: CoSoThuYforNguoiDungComponent;
  let fixture: ComponentFixture<CoSoThuYforNguoiDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoThuYforNguoiDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThuYforNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
