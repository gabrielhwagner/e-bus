import axios from './api';

class DirectionsService {
  searchOrderWaypoints(origin, destination, waypoints) {
    const data = {
      origin: `${origin.latitude},${origin.longitude}`,
      destination: `${destination.latitude},${destination.longitude}`,
      waypoints: converterWaypoints(waypoints),
    };
    const params = converterURL(data);
    const url = `https://maps.googleapis.com/maps/api/directions/json?${params}&key=AIzaSyAdKYWYO_o_v7ov3qYQu5l_5Qcm3-WJ3T4`;
    return axios.get(url);
  }
}

function converterURL(data) {
  const retorno = Object.entries(data)
    .map(e => e.join('='))
    .join('&');
  return retorno;
}

function converterWaypoints(waypoints) {
  let string = 'optimize:true|';
  waypoints.forEach(({ latitude, longitude }, index) => {
    string += `${latitude},${longitude}`;
    if (index !== waypoints.length - 1) {
      string += '|';
    }
  });
  return string;
}

export default new DirectionsService();
