import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenMucAddComponent } from './chuyen-muc-add.component';

describe('ChuyenMucAddComponent', () => {
  let component: ChuyenMucAddComponent;
  let fixture: ComponentFixture<ChuyenMucAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenMucAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenMucAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
