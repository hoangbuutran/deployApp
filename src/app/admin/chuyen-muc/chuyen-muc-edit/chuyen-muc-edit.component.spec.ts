import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenMucEditComponent } from './chuyen-muc-edit.component';

describe('ChuyenMucEditComponent', () => {
  let component: ChuyenMucEditComponent;
  let fixture: ComponentFixture<ChuyenMucEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenMucEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenMucEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
