import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachHangDetailComponent } from './khach-hang-detail.component';

describe('KhachHangDetailComponent', () => {
  let component: KhachHangDetailComponent;
  let fixture: ComponentFixture<KhachHangDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachHangDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachHangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
