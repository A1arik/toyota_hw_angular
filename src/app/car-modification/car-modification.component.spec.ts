import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsmodificationsComponent } from './car-modification.component';

describe('CarsmodificationsComponent', () => {
  let component: CarsmodificationsComponent;
  let fixture: ComponentFixture<CarsmodificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsmodificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsmodificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
