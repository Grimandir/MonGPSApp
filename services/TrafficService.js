import axios from 'axios';

// Exemple avec TomTom ou tout autre fournisseur (à adapter)
const TRAFFIC_URL = 'https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json';

export const getTrafficFlow = async (lat, lon) => {
  const key = 'TON_CLE_API_TOMTOM';
  const res = await axios.get(`${TRAFFIC_URL}?point=${lat},${lon}&key=${key}`);
  return res.data;
};
