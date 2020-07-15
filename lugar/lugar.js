const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir);

    console.log(encodeURL);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodeURL }&appid=caaaf1966c4c1b4ee8398be5136b8e7e`,
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;

    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}