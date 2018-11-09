import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlshopListComponent } from './qlshop-list.component';

describe('QlshopListComponent', () => {
  let component: QlshopListComponent;
  let fixture: ComponentFixture<QlshopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlshopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
