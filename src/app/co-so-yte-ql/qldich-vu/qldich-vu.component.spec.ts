import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QldichVuComponent } from './qldich-vu.component';

describe('QldichVuComponent', () => {
  let component: QldichVuComponent;
  let fixture: ComponentFixture<QldichVuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QldichVuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QldichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
