import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassShopComponent } from './change-pass-shop.component';

describe('ChangePassShopComponent', () => {
  let component: ChangePassShopComponent;
  let fixture: ComponentFixture<ChangePassShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
