import { WeatherApp } from './weatherApp.js';
import { API_KEY, form, input } from './constants.js'

const weatherApp = new WeatherApp(API_KEY);

form.addEventListener('submit',  (event) => {
    event.preventDefault();
    weatherApp.fetch();

    form.reset();
})

weatherApp.fetch();


