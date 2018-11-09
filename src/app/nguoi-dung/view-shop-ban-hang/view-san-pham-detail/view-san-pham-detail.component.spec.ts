import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSanPhamDetailComponent } from './view-san-pham-detail.component';

describe('ViewSanPhamDetailComponent', () => {
  let component: ViewSanPhamDetailComponent;
  let fixture: ComponentFixture<ViewSanPhamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSanPhamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSanPhamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
