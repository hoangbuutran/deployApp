import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThuYeditComponent } from './co-so-thu-yedit.component';

describe('CoSoThuYeditComponent', () => {
  let component: CoSoThuYeditComponent;
  let fixture: ComponentFixture<CoSoThuYeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoThuYeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThuYeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
