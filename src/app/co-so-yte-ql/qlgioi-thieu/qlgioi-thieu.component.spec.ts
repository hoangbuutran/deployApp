import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlgioiThieuComponent } from './qlgioi-thieu.component';

describe('QlgioiThieuComponent', () => {
  let component: QlgioiThieuComponent;
  let fixture: ComponentFixture<QlgioiThieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlgioiThieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlgioiThieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
