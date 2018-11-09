import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKenhNguoiBanComponent } from './home-kenh-nguoi-ban.component';

describe('HomeKenhNguoiBanComponent', () => {
  let component: HomeKenhNguoiBanComponent;
  let fixture: ComponentFixture<HomeKenhNguoiBanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKenhNguoiBanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKenhNguoiBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
