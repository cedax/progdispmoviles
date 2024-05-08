/* eslint-disable */
import axios from 'axios';

const API_KEY = '3b9255bfe7d25156ff6881be767fde73';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

class WeatherModel {
    constructor(city, temperature, description) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
    }
}

export { getWeather, WeatherModel };
/* eslint-enable */