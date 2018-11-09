import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlbaiVietHomeComponent } from './qlbai-viet-home.component';

describe('QlbaiVietHomeComponent', () => {
  let component: QlbaiVietHomeComponent;
  let fixture: ComponentFixture<QlbaiVietHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlbaiVietHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlbaiVietHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
