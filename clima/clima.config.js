/**
 * 
 *  Archivo de configuración para el clima
 */

const axios = require('axios');

const getClimaLatLng = async( lat, lng ) => {

    let KEY = 'a1182975a21cfd3780ade26f95e0b635';
    let UNITS = 'metric';
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${UNITS}&appid=${KEY}`);

    if( response.data.cod !== 200 ) {
        throw new Error('No hay resultado para dichos puntos', lat, lng);
    } 

    let clima = response.data.main.temp;
    
    return clima; 
};

module.exports = {
    getClimaLatLng
}