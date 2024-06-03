import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedometerComponent } from './pedometer.component';

describe('PedometerComponent', () => {
  let component: PedometerComponent;
  let fixture: ComponentFixture<PedometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedometerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
