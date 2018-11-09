import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSoThuYlistComponent } from './co-so-thu-ylist.component';

describe('CoSoThuYlistComponent', () => {
  let component: CoSoThuYlistComponent;
  let fixture: ComponentFixture<CoSoThuYlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoSoThuYlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoSoThuYlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
