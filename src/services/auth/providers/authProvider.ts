import UserModel from '../../../models/userModel';

abstract class IAuthProvider {
  abstract initialize(): Promise<any>;
  abstract register(
    username: string,
    email: string,
    password: string,
  ): Promise<UserModel>;
  abstract login(username: string, password: string): Promise<UserModel>;
  abstract logout(): Promise<any>;
  abstract isAuthenticated(): Promise<boolean>;
  abstract getCurrentUser(): Promise<any>;
  abstract checkAuth(): Promise<any>;
  abstract checkError(): Promise<any>;
  abstract getPermissions(): Promise<any>;
}

export default IAuthProvider;
