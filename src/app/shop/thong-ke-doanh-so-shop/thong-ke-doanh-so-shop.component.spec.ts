import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeDoanhSoShopComponent } from './thong-ke-doanh-so-shop.component';

describe('ThongKeDoanhSoShopComponent', () => {
  let component: ThongKeDoanhSoShopComponent;
  let fixture: ComponentFixture<ThongKeDoanhSoShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongKeDoanhSoShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeDoanhSoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
