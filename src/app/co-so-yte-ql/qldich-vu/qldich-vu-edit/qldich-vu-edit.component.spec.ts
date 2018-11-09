import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QldichVuEditComponent } from './qldich-vu-edit.component';

describe('QldichVuEditComponent', () => {
  let component: QldichVuEditComponent;
  let fixture: ComponentFixture<QldichVuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QldichVuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QldichVuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
