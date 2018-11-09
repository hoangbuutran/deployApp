import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamEditComponent } from './san-pham-edit.component';

describe('SanPhamEditComponent', () => {
  let component: SanPhamEditComponent;
  let fixture: ComponentFixture<SanPhamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPhamEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
