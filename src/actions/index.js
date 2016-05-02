import axios from 'axios';

const API_KEY = '1272ca01234eb00f354d2058edb6145a';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const GET_WEATHER = 'GET_WEATHER';

export function getWeather(cityName){
	const url = `${BASE_URL}&q=${cityName},us`;
	const url_result = axios.get(url);
	return ({
		type: GET_WEATHER,
		payload: url_result
	});
} 