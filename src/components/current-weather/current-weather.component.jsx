import './current-weather.component.css';

const CurrentWeather = (props) => {
    return (
        <div className="current-weather">
          {props.Data.length !== 0 ? 
            <div>
                <img className="current-weather_icon" src={`http://openweathermap.org/img/w/${props.Data.weather[0].icon}.png`} />
                <h2 className="current-weather_temp">{Math.round(props.Data.main.temp)}&deg;</h2>
                <h1>{props.Data.name}, {props.Data.sys.country}</h1>
              <p className="current-weather_description">{props.Data.weather[0].description}</p>
            </div>
            :
            null
          }
        </div>
    )
}

export default CurrentWeather;