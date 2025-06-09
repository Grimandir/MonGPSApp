import React from 'react';
import { Polyline } from 'react-native-maps';

const TrafficLayer = ({ trafficData }) => {
  return trafficData.map((segment, index) => (
    <Polyline
      key={index}
      coordinates={segment.coordinates}
      strokeColor={segment.congestion ? 'red' : 'green'}
      strokeWidth={4}
    />
  ));
};

export default TrafficLayer;
