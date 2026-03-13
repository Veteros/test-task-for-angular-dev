import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockBuilder } from '@my-org/block-builder';
import { WeatherData } from '@my-org/weather-state';

@Component({
  selector: 'lib-weather-ui',
  imports: [CommonModule, BlockBuilder],
  templateUrl: './weather-ui.html',
  styleUrl: './weather-ui.css',
})
export class WeatherUi {

  @Input() isLoading: boolean = false;
  @Input() weatherData: WeatherData | null = null;

}
