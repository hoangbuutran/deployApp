import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlbaiVietAdminComponent } from './qlbai-viet-admin.component';

describe('QlbaiVietAdminComponent', () => {
  let component: QlbaiVietAdminComponent;
  let fixture: ComponentFixture<QlbaiVietAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlbaiVietAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlbaiVietAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
