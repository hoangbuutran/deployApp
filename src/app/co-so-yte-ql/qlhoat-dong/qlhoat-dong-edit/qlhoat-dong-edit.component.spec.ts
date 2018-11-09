import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoatDongEditComponent } from './qlhoat-dong-edit.component';

describe('QlhoatDongEditComponent', () => {
  let component: QlhoatDongEditComponent;
  let fixture: ComponentFixture<QlhoatDongEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlhoatDongEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhoatDongEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
