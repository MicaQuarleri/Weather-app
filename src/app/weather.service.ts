import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Weather } from './interfaces/weather'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor (private readonly http: HttpClient) { }

  private readonly apiKey = '820715dd55fa5508bac211c7a45b5f42'
  private readonly url = 'http://api.openweathermap.org'
  private _weather!: Weather

  get weather (): Weather {
    return this._weather
  }

  getCityData (city: string): any {
    const endtpoint = `${this.url}/geo/1.0/direct?q=${city}&limit=5&appid=${this.apiKey}`
    return this.http.get<any>(endtpoint)
  }

  getWeather (lat: number, lon: number): any {
    const endtpoint = `${this.url}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
    return this.http.get<any>(endtpoint).pipe(
      map((weather: Weather) => {
        this._weather = weather
      })
    )
  }
}
