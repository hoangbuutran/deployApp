import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsucKhoeThuCungAddComponent } from './qlsuc-khoe-thu-cung-add.component';

describe('QlsucKhoeThuCungAddComponent', () => {
  let component: QlsucKhoeThuCungAddComponent;
  let fixture: ComponentFixture<QlsucKhoeThuCungAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlsucKhoeThuCungAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlsucKhoeThuCungAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
