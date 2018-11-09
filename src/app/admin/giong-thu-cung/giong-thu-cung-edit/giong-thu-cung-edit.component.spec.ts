import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiongThuCungEditComponent } from './giong-thu-cung-edit.component';

describe('GiongThuCungEditComponent', () => {
  let component: GiongThuCungEditComponent;
  let fixture: ComponentFixture<GiongThuCungEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiongThuCungEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiongThuCungEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
