import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsucKhoeThuCungListComponent } from './qlsuc-khoe-thu-cung-list.component';

describe('QlsucKhoeThuCungListComponent', () => {
  let component: QlsucKhoeThuCungListComponent;
  let fixture: ComponentFixture<QlsucKhoeThuCungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlsucKhoeThuCungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlsucKhoeThuCungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
