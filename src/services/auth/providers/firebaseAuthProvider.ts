import {firebase} from '@react-native-firebase/auth';
import IAuthProvider from './authProvider';

class FirebaseAuthProvider implements IAuthProvider {
  auth = firebase.auth();

  async isAuthenticated(): Promise<boolean> {
    const user = this.auth.currentUser;
    return !!user;
  }
  initialize(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async register(
    username: string,
    email: string,
    password: string,
  ): Promise<any> {
    try {
      console.log('Email: ', email);
      console.log('Password: ', password);
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      // send email verification
      await userCredential.user.sendEmailVerification();

      await this.auth.signOut();

      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
  async login(username: string, password: string): Promise<any> {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        username,
        password,
      );
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
  async logout(): Promise<any> {
    try {
      await this.auth.signOut();
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser(): Promise<any> {
    try {
      const user = this.auth.currentUser;
      if (user) {
        return user;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }
  checkAuth(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  checkError(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getPermissions(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

export default FirebaseAuthProvider;
