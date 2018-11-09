import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoaDonListComponent } from './hoa-don-list.component';

describe('HoaDonListComponent', () => {
  let component: HoaDonListComponent;
  let fixture: ComponentFixture<HoaDonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoaDonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoaDonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
