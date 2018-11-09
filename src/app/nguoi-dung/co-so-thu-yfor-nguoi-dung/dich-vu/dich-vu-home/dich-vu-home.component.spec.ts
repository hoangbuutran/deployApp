import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuHomeComponent } from './dich-vu-home.component';

describe('DichVuHomeComponent', () => {
  let component: DichVuHomeComponent;
  let fixture: ComponentFixture<DichVuHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
