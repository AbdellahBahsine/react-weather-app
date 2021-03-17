import icons from '../../helpers/icons.json'

import './current-weather.component.css';
import '../../weather-icons.min.css';

const CurrentWeather = (props) => {
  
    return (
        <div className="current-weather">
          {props.loading && <div className="loader"></div>}
          {props.data.length !== 0 ? 
            <div>
                <i className={`current-weather-icon wi wi-${!(props.code > 699 && props.code < 800) && !(props.code > 899 && props.code < 1000) ? "day-" : ""}${icons[props.code].icon}`}></i>
                <h2 className="current-weather_temp">{Math.round(props.data.main.temp)}&deg;</h2>
                <h1>{props.data.name}, {props.data.sys.country}</h1>
              <p className="current-weather_description">{props.data.weather[0].description}</p>
            </div>
            :
            null
          }
        </div>
    )
}

export default CurrentWeather;