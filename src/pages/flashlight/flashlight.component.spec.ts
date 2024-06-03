import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashlightComponent } from './flashlight.component';

describe('FlashlightComponent', () => {
  let component: FlashlightComponent;
  let fixture: ComponentFixture<FlashlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
