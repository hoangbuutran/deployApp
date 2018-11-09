import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlphieuHenKhamListComponent } from './qlphieu-hen-kham-list.component';

describe('QlphieuHenKhamListComponent', () => {
  let component: QlphieuHenKhamListComponent;
  let fixture: ComponentFixture<QlphieuHenKhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlphieuHenKhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlphieuHenKhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
