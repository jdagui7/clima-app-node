const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=caaaf1966c4c1b4ee8398be5136b8e7e&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}