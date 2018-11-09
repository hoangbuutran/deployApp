import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoiDungProfileEditComponent } from './nguoi-dung-profile-edit.component';

describe('NguoiDungProfileEditComponent', () => {
  let component: NguoiDungProfileEditComponent;
  let fixture: ComponentFixture<NguoiDungProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguoiDungProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguoiDungProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
