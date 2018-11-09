import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlshopListChuaDuyetComponent } from './qlshop-list-chua-duyet.component';

describe('QlshopListChuaDuyetComponent', () => {
  let component: QlshopListChuaDuyetComponent;
  let fixture: ComponentFixture<QlshopListChuaDuyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlshopListChuaDuyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlshopListChuaDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
