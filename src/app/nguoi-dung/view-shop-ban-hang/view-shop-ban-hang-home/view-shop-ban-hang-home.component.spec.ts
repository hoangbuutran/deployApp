import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopBanHangHomeComponent } from './view-shop-ban-hang-home.component';

describe('ViewShopBanHangHomeComponent', () => {
  let component: ViewShopBanHangHomeComponent;
  let fixture: ComponentFixture<ViewShopBanHangHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShopBanHangHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopBanHangHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
