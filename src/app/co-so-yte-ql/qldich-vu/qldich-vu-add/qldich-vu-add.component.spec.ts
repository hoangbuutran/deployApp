import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QldichVuAddComponent } from './qldich-vu-add.component';

describe('QldichVuAddComponent', () => {
  let component: QldichVuAddComponent;
  let fixture: ComponentFixture<QldichVuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QldichVuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QldichVuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
