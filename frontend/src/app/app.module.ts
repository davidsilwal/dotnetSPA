import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherForecastClient, API_BASE_URL } from './weatherforecast.client';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {
    provide: API_BASE_URL,
    useValue: environment.apiUrl
},
WeatherForecastClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
