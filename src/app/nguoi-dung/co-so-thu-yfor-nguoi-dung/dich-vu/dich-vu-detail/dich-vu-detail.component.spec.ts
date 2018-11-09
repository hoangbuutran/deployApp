import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichVuDetailComponent } from './dich-vu-detail.component';

describe('DichVuDetailComponent', () => {
  let component: DichVuDetailComponent;
  let fixture: ComponentFixture<DichVuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichVuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichVuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
