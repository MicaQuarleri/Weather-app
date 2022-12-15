import { Component } from '@angular/core'
import { Weather } from 'src/app/interfaces/weather'
import { WeatherService } from 'src/app/weather.service'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  get weatherData (): Weather {
    return this.weatherService.weather
  }

  constructor (private readonly weatherService: WeatherService) {}
}
