import {useMemo} from 'react';
import AuthService from '../services/auth/authService';
import CarService from '../services/cars/carService';
import MapService from '../services/map/mapService';

export const useAuthService = () => {
  const authService = useMemo(() => AuthService.getInstance(), []);
  return authService;
};

export const useCarService = () => {
  const carService = useMemo(() => CarService.getInstance(), []);
  return carService;
};

export const useMapService = () => {
  const mapService = useMemo(() => MapService.getInstance(), []);
  return mapService;
};
