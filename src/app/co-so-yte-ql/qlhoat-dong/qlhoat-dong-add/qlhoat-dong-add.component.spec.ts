import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoatDongAddComponent } from './qlhoat-dong-add.component';

describe('QlhoatDongAddComponent', () => {
  let component: QlhoatDongAddComponent;
  let fixture: ComponentFixture<QlhoatDongAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlhoatDongAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhoatDongAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
