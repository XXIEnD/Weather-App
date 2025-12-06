export class DataFetcher {
    #latitude
    #longitude

    constructor (latitude, longitude) {
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    data () {
        return fetch(`https://api.weatherapi.com/v1/current.json?key=01551a8cdb4b4f3aa12115907250312&q=${this.#latitude},${this.#longitude}&aqi=no`)
        .then((response) => response.json())
        .then((data) => ({
            temperature: data.current.temp_c,
            windSpeed: data.current.wind_kph,
            icon: data.current.condition.icon
        }))
    }
}