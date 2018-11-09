import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyenDetailComponent } from './quyen-detail.component';

describe('QuyenDetailComponent', () => {
  let component: QuyenDetailComponent;
  let fixture: ComponentFixture<QuyenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuyenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
