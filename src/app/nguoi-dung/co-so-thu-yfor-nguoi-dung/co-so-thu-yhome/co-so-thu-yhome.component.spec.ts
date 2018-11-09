import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThuYhomeComponent } from './co-so-thu-yhome.component';

describe('CoSoThuYhomeComponent', () => {
  let component: CoSoThuYhomeComponent;
  let fixture: ComponentFixture<CoSoThuYhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoThuYhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThuYhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
