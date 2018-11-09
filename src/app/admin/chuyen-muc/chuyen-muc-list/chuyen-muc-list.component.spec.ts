import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenMucListComponent } from './chuyen-muc-list.component';

describe('ChuyenMucListComponent', () => {
  let component: ChuyenMucListComponent;
  let fixture: ComponentFixture<ChuyenMucListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenMucListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenMucListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
