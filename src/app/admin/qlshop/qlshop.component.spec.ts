import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlshopComponent } from './qlshop.component';

describe('QlshopComponent', () => {
  let component: QlshopComponent;
  let fixture: ComponentFixture<QlshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
