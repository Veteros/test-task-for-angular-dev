import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';
import { WeatherUi } from '@my-org/weather-ui';
import { WeatherData } from './weather.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-weather-state',
  imports: [CommonModule, WeatherUi],
  templateUrl: './weather-state.html',
  styleUrl: './weather-state.css',
})
export class WeatherState implements OnInit, OnDestroy {

  private weatherService = inject(WeatherService);
  private subscriptions: Subscription = new Subscription();

  mockCity = 'London';
  private _weather = signal<WeatherData | null>(null);
  private _isLoading = signal<boolean>(false);

  readonly weather = this._weather.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();

  ngOnInit() {
    console.log('WeatherState initialized');
    this.getWeatherData();
  }

  getWeatherData() {
    this._isLoading.set(true);

    this.subscriptions.add(
      this.weatherService.getWeather(this.mockCity).subscribe({
        next:  (data) => {
          this._weather.set(data);
          this._isLoading.set(false);
        },
        error: (error) => {
          console.error('Failed to fetch weather data', error);
          this._isLoading.set(false);
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
