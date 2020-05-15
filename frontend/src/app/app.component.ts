import { Component, OnInit  } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherForecastClient, IWeatherForecast } from './weatherforecast.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  forecasts: IWeatherForecast[];

  constructor(private weatherClient: WeatherForecastClient) { }

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    return this.weatherClient.get().subscribe(res => {
      this.forecasts = res;
      console.log(res);
    });
  }

}
