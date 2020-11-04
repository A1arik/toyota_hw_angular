import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcolorComponent } from './car-color.component';

describe('CarColorComponent', () => {
  let component: CarcolorComponent;
  let fixture: ComponentFixture<CarcolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
