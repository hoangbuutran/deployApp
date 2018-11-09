import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoatDongListComponent } from './qlhoat-dong-list.component';

describe('QlhoatDongListComponent', () => {
  let component: QlhoatDongListComponent;
  let fixture: ComponentFixture<QlhoatDongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlhoatDongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhoatDongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
