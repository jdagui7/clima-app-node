const axios = require('axios');
const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');
const { getLugarLatLng } = require('../lugar/lugar');
const { getClima } = require('../clima/clima');

const getInfo = async(dir) => {

    const resp1 = await lugar.getLugarLatLng(dir);

    const data = resp1.data;

    const lat = data.coord.lat;
    const lng = data.coord.lon;

    const resp2 = await clima.getClima(lat, lng);



    console.log(`EL CLIMA DE ${ dir } es ${resp2.data.main.temp}`);



}

module.exports = {
    getInfo
}