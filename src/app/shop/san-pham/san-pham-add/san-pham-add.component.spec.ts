import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamAddComponent } from './san-pham-add.component';

describe('SanPhamAddComponent', () => {
  let component: SanPhamAddComponent;
  let fixture: ComponentFixture<SanPhamAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPhamAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
