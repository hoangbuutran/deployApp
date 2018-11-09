import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QldichVuListComponent } from './qldich-vu-list.component';

describe('QldichVuListComponent', () => {
  let component: QldichVuListComponent;
  let fixture: ComponentFixture<QldichVuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QldichVuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QldichVuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
