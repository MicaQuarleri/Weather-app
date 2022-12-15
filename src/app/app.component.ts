import { Component } from '@angular/core'
import { WeatherService } from './weather.service'
import { Weather } from './interfaces/weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locationNotFound = false
  loading = false

  get weatherData (): Weather {
    return this.weatherService.weather
  }

  constructor (private readonly weatherService: WeatherService) {
    this.loading = true
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.weatherService.getWeather(coords.latitude, coords.longitude).subscribe(() => { this.loading = false })
      },
      () => {
        this.locationNotFound = true
      }
    )
  }
}
