import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassCstyComponent } from './change-pass-csty.component';

describe('ChangePassCstyComponent', () => {
  let component: ChangePassCstyComponent;
  let fixture: ComponentFixture<ChangePassCstyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassCstyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassCstyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
