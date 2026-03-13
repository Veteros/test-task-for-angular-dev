import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherUi } from './weather-ui';

describe('WeatherUi', () => {
  let component: WeatherUi;
  let fixture: ComponentFixture<WeatherUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherUi],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
