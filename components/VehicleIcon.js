import React from 'react';
import { Image } from 'react-native';

const vehicleIcons = {
  sedan: require('../assets/icons/car_sedan.png'),
  coupe: require('../assets/icons/car_coupe.png'),
  suv: require('../assets/icons/car_suv.png'),
  moto: require('../assets/icons/moto.png'),
};

const VehicleIcon = ({ type = 'sedan', size = 30 }) => {
  return (
    <Image
      source={vehicleIcons[type]}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  );
};

export default VehicleIcon;
