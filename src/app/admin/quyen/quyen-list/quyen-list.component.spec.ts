import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyenListComponent } from './quyen-list.component';

describe('QuyenListComponent', () => {
  let component: QuyenListComponent;
  let fixture: ComponentFixture<QuyenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuyenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
