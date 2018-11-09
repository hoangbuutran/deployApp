import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyenAddComponent } from './quyen-add.component';

describe('QuyenAddComponent', () => {
  let component: QuyenAddComponent;
  let fixture: ComponentFixture<QuyenAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuyenAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
