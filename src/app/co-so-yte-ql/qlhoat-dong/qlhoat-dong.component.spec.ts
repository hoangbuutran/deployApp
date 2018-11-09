import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoatDongComponent } from './qlhoat-dong.component';

describe('QlhoatDongComponent', () => {
  let component: QlhoatDongComponent;
  let fixture: ComponentFixture<QlhoatDongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlhoatDongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhoatDongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
