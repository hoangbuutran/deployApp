import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungProfileHomeComponent } from './nguoi-dung-profile-home.component';

describe('NguoiDungProfileHomeComponent', () => {
  let component: NguoiDungProfileHomeComponent;
  let fixture: ComponentFixture<NguoiDungProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
