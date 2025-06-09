import { Platform, PermissionsAndroid } from 'react-native';

export async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permission de localisation',
        message: 'L’application a besoin de votre localisation pour fonctionner',
        buttonNeutral: 'Plus tard',
        buttonNegative: 'Annuler',
        buttonPositive: 'OK',
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  // iOS permissions sont gérées automatiquement par la bibliothèque géolocalisation
  return true;
}
