import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThuYaddComponent } from './co-so-thu-yadd.component';

describe('CoSoThuYaddComponent', () => {
  let component: CoSoThuYaddComponent;
  let fixture: ComponentFixture<CoSoThuYaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoThuYaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThuYaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
