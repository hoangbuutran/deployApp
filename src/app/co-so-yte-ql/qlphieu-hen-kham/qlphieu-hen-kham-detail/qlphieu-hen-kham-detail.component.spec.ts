import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlphieuHenKhamDetailComponent } from './qlphieu-hen-kham-detail.component';

describe('QlphieuHenKhamDetailComponent', () => {
  let component: QlphieuHenKhamDetailComponent;
  let fixture: ComponentFixture<QlphieuHenKhamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlphieuHenKhamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlphieuHenKhamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
