import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnimgComponent } from './cpnimg.component';

describe('CpnimgComponent', () => {
  let component: CpnimgComponent;
  let fixture: ComponentFixture<CpnimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpnimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpnimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
