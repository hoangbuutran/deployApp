import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlphieuHenKhamComponent } from './qlphieu-hen-kham.component';

describe('QlphieuHenKhamComponent', () => {
  let component: QlphieuHenKhamComponent;
  let fixture: ComponentFixture<QlphieuHenKhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlphieuHenKhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlphieuHenKhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
