import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsucKhoeThuCungComponent } from './qlsuc-khoe-thu-cung.component';

describe('QlsucKhoeThuCungComponent', () => {
  let component: QlsucKhoeThuCungComponent;
  let fixture: ComponentFixture<QlsucKhoeThuCungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlsucKhoeThuCungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlsucKhoeThuCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
