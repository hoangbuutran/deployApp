import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiongThuCungListComponent } from './giong-thu-cung-list.component';

describe('GiongThuCungListComponent', () => {
  let component: GiongThuCungListComponent;
  let fixture: ComponentFixture<GiongThuCungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiongThuCungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiongThuCungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
