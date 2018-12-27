// Google Maps API AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM

const place = require('./place/place.config');
const clima = require('./clima/clima.config');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// No olvidar que las funciones deben ser declaradas en el module.exports = {}
let getInfo = async ( direccion ) => {


    try {
    
        let coord = await place.getPlaceLatLng( direccion );
        let temp = await clima.getClimaLatLng( coord.latitud, coord.longitud );
    
        return `EL clima en ${coord.direccion} es de ${temp}°C.`   

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};


getInfo( argv.direccion )
    .then( resp => {
        console.info( resp );
    })
    .catch( err => console.error('Ocurrio un error >>', err))


