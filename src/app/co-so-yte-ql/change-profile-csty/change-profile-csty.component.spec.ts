import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfileCstyComponent } from './change-profile-csty.component';

describe('ChangeProfileCstyComponent', () => {
  let component: ChangeProfileCstyComponent;
  let fixture: ComponentFixture<ChangeProfileCstyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeProfileCstyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeProfileCstyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
