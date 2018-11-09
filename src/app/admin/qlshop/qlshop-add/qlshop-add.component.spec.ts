import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlshopAddComponent } from './qlshop-add.component';

describe('QlshopAddComponent', () => {
  let component: QlshopAddComponent;
  let fixture: ComponentFixture<QlshopAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlshopAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlshopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
