import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamListComponent } from './san-pham-list.component';

describe('SanPhamListComponent', () => {
  let component: SanPhamListComponent;
  let fixture: ComponentFixture<SanPhamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanPhamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanPhamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
