import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachHangListComponent } from './khach-hang-list.component';

describe('KhachHangListComponent', () => {
  let component: KhachHangListComponent;
  let fixture: ComponentFixture<KhachHangListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachHangListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachHangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
