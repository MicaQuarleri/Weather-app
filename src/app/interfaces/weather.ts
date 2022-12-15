export interface Weather {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export interface Coord {
  lat: number
  lon: number
}

export interface List {
  dt: number
  main: MainClass
  weather: WeatherElement[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  sys: Sys
  dt_txt: Date
  snow?: Snow
}

export interface Clouds {
  all: number
}

export interface MainClass {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface Snow {
  '3h': number
}

export interface Sys {
  pod: Pod
}

export enum Pod {
  D = 'd',
  N = 'n',
}

export interface WeatherElement {
  id: number
  main: MainEnum
  description: Description
  icon: Icon
}

export enum Description {
  BrokenClouds = 'broken clouds',
  LightSnow = 'light snow',
  OvercastClouds = 'overcast clouds',
  Snow = 'snow',
}

export enum Icon {
  The04D = '04d',
  The04N = '04n',
  The13D = '13d',
  The13N = '13n',
}

export enum MainEnum {
  Clouds = 'Clouds',
  Snow = 'Snow',
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}
