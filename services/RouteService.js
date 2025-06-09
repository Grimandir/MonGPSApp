import axios from 'axios';

const OSRM_URL = 'https://router.project-osrm.org/route/v1/driving';

export const getRoute = async (start, end) => {
  const url = `${OSRM_URL}/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?overview=full&geometries=geojson&steps=true`;

  const res = await axios.get(url);
  const route = res.data.routes[0];
  return route;
};
