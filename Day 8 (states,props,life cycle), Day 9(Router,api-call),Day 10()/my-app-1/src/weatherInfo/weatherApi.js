import axios from 'axios'
import {CONFIG} from './config'

export class WeatherApi{
    static getCurrentWeatherData(cityName){
        let url =CONFIG.WEATHER_API_URL.replace('~',cityName)
        console.log(url)
        return axios.get(url + CONFIG.WEATHER_API_KEY )

    }
}