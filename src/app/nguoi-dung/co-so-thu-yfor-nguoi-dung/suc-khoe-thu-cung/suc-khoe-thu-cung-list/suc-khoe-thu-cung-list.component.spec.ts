import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeThuCungListComponent } from './suc-khoe-thu-cung-list.component';

describe('SucKhoeThuCungListComponent', () => {
  let component: SucKhoeThuCungListComponent;
  let fixture: ComponentFixture<SucKhoeThuCungListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucKhoeThuCungListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucKhoeThuCungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
