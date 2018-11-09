import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongKeHomeComponent } from './thong-ke-home.component';

describe('ThongKeHomeComponent', () => {
  let component: ThongKeHomeComponent;
  let fixture: ComponentFixture<ThongKeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongKeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongKeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
