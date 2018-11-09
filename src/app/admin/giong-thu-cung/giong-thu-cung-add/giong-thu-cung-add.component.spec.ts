import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiongThuCungAddComponent } from './giong-thu-cung-add.component';

describe('GiongThuCungAddComponent', () => {
  let component: GiongThuCungAddComponent;
  let fixture: ComponentFixture<GiongThuCungAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiongThuCungAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiongThuCungAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
