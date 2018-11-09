import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoMoiBaiDangComponent } from './tao-moi-bai-dang.component';

describe('TaoMoiBaiDangComponent', () => {
  let component: TaoMoiBaiDangComponent;
  let fixture: ComponentFixture<TaoMoiBaiDangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoMoiBaiDangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoMoiBaiDangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
