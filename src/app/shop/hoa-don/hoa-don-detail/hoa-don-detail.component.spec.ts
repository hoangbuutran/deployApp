import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaDonDetailComponent } from './hoa-don-detail.component';

describe('HoaDonDetailComponent', () => {
  let component: HoaDonDetailComponent;
  let fixture: ComponentFixture<HoaDonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaDonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaDonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
