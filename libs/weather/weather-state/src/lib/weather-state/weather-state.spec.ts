import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherState } from './weather-state';

describe('WeatherState', () => {
  let component: WeatherState;
  let fixture: ComponentFixture<WeatherState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherState],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherState);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
