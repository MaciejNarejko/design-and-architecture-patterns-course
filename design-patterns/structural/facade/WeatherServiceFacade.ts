import axios from 'axios'

export class WeatherServiceFacade {
	private apiKey: string
	private apiUrl: string

	constructor(apiKey: string) {
		this.apiKey = apiKey
		this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
	}

	async getCurrentTemperature(city: string): Promise<number> {
		try {
			const response = await axios.get(this.apiUrl, {
				params: {
					q: city,
					appid: this.apiKey,
					units: 'metric',
				},
			})
			return response.data.main.temp
		} catch (error) {
			const message = error instanceof Error ? error.message : 'Nieznany błąd'
			throw new Error(`Błąd pobierania danych pogodowych: ${message}`)
		}
	}
}
