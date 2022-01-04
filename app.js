const express = require('express');
const app = express();
const port = 3000;
const vehiclesJson = require('./data/vehicles.json');
const tripsJson = require('./data/trips.json');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/vehicles', (req, res) => {
    res.json(vehiclesJson)
})

app.get('/trips', (req, res) => {
    res.json(tripsJson)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});