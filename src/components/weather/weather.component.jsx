import './weather.component.css';
import axios from 'axios';
import {useState} from 'react';

import SearchBar from '../search-bar/search-bar.component';
import CurrentWeather from '../current-weather/current-weather.component';

const Weather = () => {

    const [city, setCity] = useState('')
    const [Data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)

    function getWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b9db47cd382ae2e5140b269e251ed28b`)
        .then(response => setData(response.data), setCity(''))
        .catch(error => console.log(error))
    }

    function handleChange(e) {
        setCity(e.target.value)
    }

    return(
        <div class="weather">
            <SearchBar city={city} handleChange={handleChange} getWeather={getWeather} />
            <CurrentWeather Data={Data} />
        </div>
    )
}

export default Weather;