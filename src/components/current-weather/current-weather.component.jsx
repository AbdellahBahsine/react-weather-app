import './current-weather.component.css';

const CurrentWeather = (props) => {
    return (
        <div className="current-weather">
          {props.loading && <div className="loader"></div>}
          {props.data.length !== 0 ? 
            <div>
                <img className="current-weather_icon" src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="weather-icon" />
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