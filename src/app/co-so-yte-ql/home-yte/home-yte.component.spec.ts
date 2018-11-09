import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeYteComponent } from './home-yte.component';

describe('HomeYteComponent', () => {
  let component: HomeYteComponent;
  let fixture: ComponentFixture<HomeYteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeYteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeYteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
