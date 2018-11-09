import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucKhoeThuCungComponent } from './suc-khoe-thu-cung.component';

describe('SucKhoeThuCungComponent', () => {
  let component: SucKhoeThuCungComponent;
  let fixture: ComponentFixture<SucKhoeThuCungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucKhoeThuCungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucKhoeThuCungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
