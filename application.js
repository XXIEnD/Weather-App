export class Application {
    #dataFetcher
    #render

    constructor(dataFetcher, render) {
        this.#dataFetcher = dataFetcher;
        this.#render = render;
    }

    run() {
        this.#dataFetcher.data()
          .then((data) => {
            this.#render.renderWeather(data)
          })
    }
}