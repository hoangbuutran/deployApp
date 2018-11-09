import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopBanHangComponent } from './view-shop-ban-hang.component';

describe('ViewShopBanHangComponent', () => {
  let component: ViewShopBanHangComponent;
  let fixture: ComponentFixture<ViewShopBanHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShopBanHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopBanHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
