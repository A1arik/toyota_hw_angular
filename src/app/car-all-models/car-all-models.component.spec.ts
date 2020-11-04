import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAllModelsComponent } from './car-all-models.component';

describe('CarAllModelsComponent', () => {
  let component: CarAllModelsComponent;
  let fixture: ComponentFixture<CarAllModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAllModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAllModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
