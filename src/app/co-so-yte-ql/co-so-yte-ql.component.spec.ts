import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoYteQlComponent } from './co-so-yte-ql.component';

describe('CoSoYteQlComponent', () => {
  let component: CoSoYteQlComponent;
  let fixture: ComponentFixture<CoSoYteQlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoYteQlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoYteQlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
