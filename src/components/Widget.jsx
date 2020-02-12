import React, { Component } from 'react'
import './widget.css'
import Weather from './json/weather.json'

export default class Widget extends Component {
    // constructor() {
    //     super();
    //     this.state = '';
    //   }

      render() {
        console.log(Weather.city.name)

        let fiveDays = []
          for(let i = 0; i < Weather.list.length; i+=8){
            const tmpData = [
              Weather.list[i].dt_txt,
              Weather.list[i].weather[0].icon,
              Weather.list[i].main.temp_max,
              Weather.list[i].main.temp_min  
          ]
  
            fiveDays.push(tmpData)
          
          }
          console.log(fiveDays)
        console.log(Weather.list)
      
        

        

        return (
          <div className="App">
    
            <div className="wrapper">

              <section className="location">
                <div className="location__name">
                  {Weather.city.name}
                </div>
              </section>

              <section className="current">
                <div className="current__conditions">
                  <div className="current__icon">
                    <i className="wi wi-day-cloudy" />
                  </div>
                  <div className="current__temp">15°C</div>
                </div>
                <div className="current__details">
                  <div className="current__details__precip">Precipation: 80%</div>
                  <div className="current__details__humidity">Humidity: 94%</div>
                  <div className="current__details__wind">Wind: 15 km/h</div>
                </div>
              </section>

              <section className="forecast">
                <div className="forecast__days">
                  <div className="forecast__day selected">
                    <div className="forecast__day__dow">{fiveDays[1][0]}</div>
                    <div className="forecast__day__icon">
                      <i className="wi wi-day-sunny" />
                    </div>
                    <div className="forecast__day__temp">
                      <div className="forecast__day__temp__min">13°</div>
                      <div className="forecast__day__temp__max">15°</div>
                    </div>
                  </div>

                  <div className="forecast__day">
                    <div className="forecast__day__dow">{fiveDays[2][0]}</div>
                    <div className="forecast__day__icon">
                      <i className="wi wi-day-thunderstorm" />
                    </div>
                    <div className="forecast__day__temp">
                      <div className="forecast__day__temp__min">13°</div>
                      <div className="forecast__day__temp__max">15°</div>
                    </div>
                  </div>

                  <div className="forecast__day">
                    <div className="forecast__day__dow">{fiveDays[3][0]}</div>
                    <div className="forecast__day__icon">
                      <i className="wi wi-day-sunny-overcast" />
                    </div>
                    <div className="forecast__day__temp">
                      <div className="forecast__day__temp__min">13°</div>
                      <div className="forecast__day__temp__max">15°</div>
                    </div>
                  </div>

                  <div className="forecast__day">
                    <div className="forecast__day__dow">{fiveDays[4][0]}</div>
                    <div className="forecast__day__icon">
                      <i className="wi wi-day-cloudy" />
                    </div>
                    <div className="forecast__day__temp">
                      <div className="forecast__day__temp__min">13°</div>
                      <div className="forecast__day__temp__max">15°</div>
                    </div>
                  </div>
                  
                  
                </div>
              </section>
            </div>
          </div>
        );
      }
    }