import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeThuCungHomeComponent } from './suc-khoe-thu-cung-home.component';

describe('SucKhoeThuCungHomeComponent', () => {
  let component: SucKhoeThuCungHomeComponent;
  let fixture: ComponentFixture<SucKhoeThuCungHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucKhoeThuCungHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucKhoeThuCungHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
