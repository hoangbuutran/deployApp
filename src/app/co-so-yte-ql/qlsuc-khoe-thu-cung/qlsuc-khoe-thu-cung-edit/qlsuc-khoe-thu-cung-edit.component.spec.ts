import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsucKhoeThuCungEditComponent } from './qlsuc-khoe-thu-cung-edit.component';

describe('QlsucKhoeThuCungEditComponent', () => {
  let component: QlsucKhoeThuCungEditComponent;
  let fixture: ComponentFixture<QlsucKhoeThuCungEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlsucKhoeThuCungEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlsucKhoeThuCungEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
