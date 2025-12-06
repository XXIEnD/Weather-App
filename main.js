import { Application } from "./application.js"
import { DataFetcher } from "./data-fetcher.js"
import { Render } from "./render.js"
import { CoordinateValidator } from "./validator.js";

let map; 
let marker; 

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    
    button.addEventListener('click', function() {
        const latitude = document.getElementById('lat').value.trim();
        const longitude = document.getElementById('lon').value.trim();

        const validator = new CoordinateValidator();
        const result = validator.validate(latitude, longitude);

        if (!result.isValid) {
            alert(result.message);
            document.getElementById(result.fieldId).focus();
            return;
        }
        const app = new Application(
            new DataFetcher(latitude, longitude),
            new Render(document.getElementById('root'))
        );
        createMap(latitude, longitude)
        app.run();
    });

});

function createMap (latitude, longitude) {
    if (!map) {
        DG.then(function() {
            map = DG.map('map', {
                center: [latitude, longitude],
                zoom: 13
            });
            marker = DG.marker([latitude, longitude]).addTo(map);
        });
        return;
    }
    map.setView([latitude, longitude], 13);
    if (marker) {
        map.removeLayer(marker);
    }
    marker = DG.marker([latitude, longitude]).addTo(map);
}
