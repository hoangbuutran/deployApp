import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfileShopComponent } from './change-profile-shop.component';

describe('ChangeProfileShopComponent', () => {
  let component: ChangeProfileShopComponent;
  let fixture: ComponentFixture<ChangeProfileShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProfileShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProfileShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
