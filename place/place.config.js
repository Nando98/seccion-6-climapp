const axios = require('axios');

const getPlaceLatLng = async(direccion) => {

    let encoderURL = encodeURI( direccion )
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoderURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if( response.data.status === 'ZERO_RESULTS' ) {
        throw new Error('No hay resultados para la ciudad', direccion);
    }

    let information = response.data.results[0];
    let coordenadas = information.geometry.location;

    return { direccion: information.formatted_address, latitud: coordenadas.lat, longitud: coordenadas.lng };
};

module.exports = {
    getPlaceLatLng
}
