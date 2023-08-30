import IAuthProvider from './providers/authProvider';
import FirebaseAuthProvider from './providers/firebaseAuthProvider';

class AuthService {
  private authProvider: IAuthProvider;

  private static instance: AuthService;

  constructor(provider: IAuthProvider) {
    this.authProvider = provider;
  }

  static getInstance(
    provider: IAuthProvider = new FirebaseAuthProvider(),
  ): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService(provider);
    }
    return AuthService.instance;
  }

  static firebaseInstance() {
    return new AuthService(new FirebaseAuthProvider());
  }

  async initialize() {
    await this.authProvider.initialize();
  }

  async register(username: string, email: string, password: string) {
    return this.authProvider.register(username, email, password);
  }

  async login(username: string, password: string) {
    return this.authProvider.login(username, password);
  }

  async logout() {
    await this.authProvider.logout();
  }

  async isAuthenticated() {
    return this.authProvider.isAuthenticated();
  }

  async getCurrentUser() {
    return this.authProvider.getCurrentUser();
  }

  async checkAuth() {
    return this.authProvider.checkAuth();
  }

  async checkError() {
    return this.authProvider.checkError();
  }

  async getPermissions() {
    return this.authProvider.getPermissions();
  }
}

export default AuthService;
