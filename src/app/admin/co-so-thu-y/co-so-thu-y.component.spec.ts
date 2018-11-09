import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThuYComponent } from './co-so-thu-y.component';

describe('CoSoThuYComponent', () => {
  let component: CoSoThuYComponent;
  let fixture: ComponentFixture<CoSoThuYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoThuYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThuYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
