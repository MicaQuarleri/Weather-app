import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { UrlPipe } from './url.pipe'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { DrawerComponent } from './components/drawer/drawer.component';
import { ForecastComponent } from './components/forecast/forecast.component'

@NgModule({
  declarations: [
    AppComponent,
    UrlPipe,
    SpinnerComponent,
    DrawerComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
