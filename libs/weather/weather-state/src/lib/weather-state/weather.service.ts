import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather.model';
import { map, Observable } from 'rxjs';
import { WEATHER_API_KEY } from './weather.config';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {

  private http = inject(HttpClient);
  private readonly apiKey = inject(WEATHER_API_KEY);

  getWeather(city: string): Observable<WeatherData | null> {
    return this.apiGetWeather(city).pipe(
      map((response) => {
        return {
          cityName:    response.name,
          temperature: response.main.temp,
          feelsLike:   response.main.feels_like,
          humidity:    response.main.humidity,
          windSpeed:   response.wind.speed,
          description: response.weather[0].description
        };
      })
      );
  }

  apiGetWeather(city: string): Observable<any> {
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}`);
  }
}
