import { useState, useEffect } from 'react';
import RouteService from '../services/RouteService';

export default function useRoutePlanning(start, end, options) {
  const [route, setRoute] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!start || !end) {
      setRoute(null);
      return;
    }
    setLoading(true);
    RouteService.getRoute(start, end, options)
      .then(data => {
        setRoute(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [start, end, options]);

  return { route, loading, error };
}
