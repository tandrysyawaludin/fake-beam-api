const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const vehiclesJson = require('./data/vehicles.json');
const tripsJson = require('./data/trips.json');
const ratePerHourJson = require('./data/ratePerHour.json');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/vehicles', (req, res) => {
    res.json(vehiclesJson);
})

app.get('/trips', (req, res) => {
    const _tripsJson = tripsJson;
    for(let i = 0; i < tripsJson.length; i++) {
        _tripsJson['charge'] = ratePerHourJson[tripsJson[i].region].number * tripsJson[i].duration;
        _tripsJson['unit'] = ratePerHourJson[tripsJson[i].region].unit;
    }
    res.json(_tripsJson);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
