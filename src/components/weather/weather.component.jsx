import './weather.component.css';
import axios from 'axios';
import {useState} from 'react';

import SearchBar from '../search-bar/search-bar.component';
import CurrentWeather from '../current-weather/current-weather.component';

const Weather = () => {

    const [city, setCity] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const api_key = process.env.REACT_APP_API_KEY;

    // Fetching data from Open Weather Map API

    function getWeather() {

        if(city.length === 0){
            return setError(true)
        }

        setData([])
        setError(false)
        setLoading(true)

        axios.get(`https://cors-proxy.htmldriven.com/?url=http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
        .then(response => {
            setData(response.data) 
            setCity('')
            setLoading(false)
        })
        .catch(error => {
            setError(true)
            setLoading(false)
            console.log(error.message)
        })

    }

    // Giving city the input value

    function handleChange(e) {
        setCity(e.target.value)
    }

    return(
        <div className="weather">
            <SearchBar handleChange={handleChange} getWeather={getWeather} city={city} error={error} />
            <CurrentWeather data={data} loading={loading} code={data.length !== 0 && data.weather[0].id} />
        </div>
    )
}

export default Weather;