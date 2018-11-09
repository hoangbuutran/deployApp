import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiVietDetailProfileComponent } from './bai-viet-detail-profile.component';

describe('BaiVietDetailProfileComponent', () => {
  let component: BaiVietDetailProfileComponent;
  let fixture: ComponentFixture<BaiVietDetailProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiVietDetailProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiVietDetailProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
