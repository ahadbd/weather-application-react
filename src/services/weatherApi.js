import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

if (!API_KEY) {
  console.warn("OpenWeatherMap API Key is missing. Please add VITE_OPENWEATHER_API_KEY to your .env file.");
}

export const fetchWeather = async (city, country = '') => {
  const query = country ? `${city},${country}` : city;
  
  try {
    const [currentWeather, forecast] = await Promise.all([
      axios.get(`${BASE_URL}/weather`, {
        params: {
          q: query,
          appid: API_KEY,
          units: 'metric',
        },
      }),
      axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: query,
          appid: API_KEY,
          units: 'metric',
        },
      }),
    ]);
    
    return {
      current: currentWeather.data,
      forecast: forecast.data,
    };
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check your spelling.');
    } else if (error.response?.status === 401) {
      throw new Error('Invalid OpenWeather API Key. Please check your .env file.');
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
};
