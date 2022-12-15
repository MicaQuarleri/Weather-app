import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Weather } from './interfaces/weather'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor (private readonly http: HttpClient) { }

  private readonly apiKey = environment.apiKey
  private readonly url = environment.baseUrl
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
