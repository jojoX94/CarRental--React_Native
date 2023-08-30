import {useMemo} from 'react';
import AuthService from '../services/auth/authService';

const useAuthService = () => {
  const authService = useMemo(() => AuthService.getInstance(), []);
  return authService;
};

export default useAuthService;
