import { Component } from '@angular/core'
import { Weather } from 'src/app/interfaces/weather'
import { DataCity } from 'src/app/interfaces/dataCity'
import { WeatherService } from 'src/app/weather.service'

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  today: number = Date.now()
  possibleCities: DataCity[] = []
  error = ''
  loading = false

  get weatherData (): Weather {
    return this.weatherService.weather
  }

  constructor (private readonly weatherService: WeatherService) {}

  search (drawer: any): void {
    drawer.toggle()
    this.error = ''
    this.possibleCities = []
  }

  findCity (event: any): void {
    this.loading = true
    this.error = ''
    this.possibleCities = []
    event.preventDefault()
    if (event.target[0].value !== '') {
      this.weatherService.getCityData(event.target[0].value).subscribe((cities: DataCity[]) => {
        if (cities.length === 0) {
          this.error = 'City not found'
        } else {
          this.possibleCities = cities
        }
        this.loading = false
      })
    }
  }

  citySelectWeather (city: string, drawer: any): void {
    this.loading = true
    drawer.toggle()
    this.weatherService.getCityData(city).subscribe((resp: DataCity[]) => {
      this.weatherService.getWeather(resp[0].lat, resp[0].lon).subscribe(() => { this.loading = false })
    })
  }
}
