import { WeatherServiceFacade } from './WeatherServiceFacade'

const apiKey = 'api_key_here'
const weatherFacade = new WeatherServiceFacade(apiKey)

const city = prompt('Podaj nazwę miasta, aby sprawdzić temperaturę:')
if (city) {
	weatherFacade
		.getCurrentTemperature(city)
		.then(temperature => {
			alert(`Aktualna temperatura w mieście ${city} to ${temperature}°C.`)
		})
		.catch(error => {
			alert(error.message)
		})
}
