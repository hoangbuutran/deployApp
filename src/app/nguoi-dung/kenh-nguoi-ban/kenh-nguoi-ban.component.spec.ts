import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KenhNguoiBanComponent } from './kenh-nguoi-ban.component';

describe('KenhNguoiBanComponent', () => {
  let component: KenhNguoiBanComponent;
  let fixture: ComponentFixture<KenhNguoiBanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KenhNguoiBanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KenhNguoiBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
