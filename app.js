const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const vehiclesJson = require('./data/vehicles.json');
const tripsJson = require('./data/trips.json');
const ratePerHourJson = require('./data/ratePerHour.json');

app.get('/', (req, res) => {
    res.send(`
    <h1>API List</h1>
    <ul>
        <li>Get vehicles data: /vehicles</li>
        <li>Get trips data: /trips</li>
    </ul>`);
});

app.get('/vehicles', (req, res) => {
    res.json(vehiclesJson);
})

app.get('/trips', (req, res) => {
    const _tripsJson = tripsJson;
    for(let i = 0; i < tripsJson.length; i++) {
        _tripsJson[i]['charge'] = ratePerHourJson[tripsJson[i].region].number * tripsJson[i].duration;
        _tripsJson[i]['unit'] = ratePerHourJson[tripsJson[i].region].unit;
    }
    res.json(_tripsJson);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
