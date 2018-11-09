import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPham10MaxThangComponent } from './san-pham10-max-thang.component';

describe('SanPham10MaxThangComponent', () => {
  let component: SanPham10MaxThangComponent;
  let fixture: ComponentFixture<SanPham10MaxThangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPham10MaxThangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPham10MaxThangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
