import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaDonDaMuaComponent } from './hoa-don-da-mua.component';

describe('HoaDonDaMuaComponent', () => {
  let component: HoaDonDaMuaComponent;
  let fixture: ComponentFixture<HoaDonDaMuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaDonDaMuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaDonDaMuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
