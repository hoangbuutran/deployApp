import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungProfileComponent } from './nguoi-dung-profile.component';

describe('NguoiDungProfileComponent', () => {
  let component: NguoiDungProfileComponent;
  let fixture: ComponentFixture<NguoiDungProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
