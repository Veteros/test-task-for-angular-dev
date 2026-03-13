export interface WeatherData {
  [key: string]: string | number;
  cityName: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
}