import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiongThuCungComponent } from './giong-thu-cung.component';

describe('GiongThuCungComponent', () => {
  let component: GiongThuCungComponent;
  let fixture: ComponentFixture<GiongThuCungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiongThuCungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiongThuCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
