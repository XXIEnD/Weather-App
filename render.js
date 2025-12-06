export class Render {
    #root

    constructor(root) {
        this.#root = root;
    }

    renderWeather(weatherData) {
        this.#root.innerHTML = "";
        
        const container = document.createElement('div');
        container.className = 'weather-widget';

        const temp = document.createElement('span');
        temp.className = 'weather-main-temp';
        temp.innerHTML = `<small>Температура: ${weatherData.temperature}°</small>`;
        container.appendChild(temp);
        
        const icon = document.createElement('img');
        icon.src = `https:${weatherData.icon}`;
        icon.className = 'weather-main-icon';
        container.appendChild(icon);
        
        const wind = document.createElement('div');
        wind.className = 'weather-wind';
        wind.innerHTML = `<small>Ветер: ${weatherData.windSpeed} км/ч</small>`;
        container.appendChild(wind);
        
        this.#root.appendChild(container);
    }
}