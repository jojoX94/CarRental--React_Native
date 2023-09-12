import {useMemo} from 'react';
import AuthService from '../services/auth/authService';
import CarService from '../services/cars/carService';

export const useAuthService = () => {
  const authService = useMemo(() => AuthService.getInstance(), []);
  return authService;
};

export const useCarService = () => {
  const carService = useMemo(() => CarService.getInstance(), []);
  return carService;
};
