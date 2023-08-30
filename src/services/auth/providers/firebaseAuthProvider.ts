import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import IAuthProvider from './authProvider';
import {FirebaseError} from '@firebase/util';
import {
  AuthError,
  EmailAlreadyInUseError,
  EmailNotVerifiedError,
  WeakPasswordError,
} from '../../../utils/errors/auth';
import authError from '../../../constants/authError';
import UserModel from '../../../models/userModel';

class FirebaseAuthProvider implements IAuthProvider {
  auth = firebase.auth();

  usersCollection = firestore().collection('users');

  async isAuthenticated(): Promise<boolean> {
    const user = this.auth.currentUser;
    return !!user;
  }
  initialize(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async register(
    fullName: string,
    email: string,
    password: string,
  ): Promise<any> {
    try {
      // create user with email and password for authentication
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      // add user to firestore
      await this.usersCollection.add({
        fullName,
        email,
        password,
        createdAt: new Date(),
      });

      // send email verification
      await userCredential.user.sendEmailVerification();

      await this.auth.signOut();

      return userCredential.user;
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case authError.EmailAlreadyInUseError:
            throw new EmailAlreadyInUseError('Email is already in use');
          case authError.WeakPasswordError:
            throw new WeakPasswordError('Password is too weak');
          default:
            throw new AuthError('Authentication error', error.message);
        }
      }
      throw new AuthError('Authentication error', error.message);
    }
  }
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password,
      );

      // check if user is verified
      if (!userCredential.user.emailVerified) {
        await userCredential.user.sendEmailVerification();
        await this.auth.signOut();
        throw new EmailNotVerifiedError();
      }

      // get user from firestore where email is equal to the email provided
      const user = await this.usersCollection.where('email', '==', email).get();

      return {
        id: user.docs[0].id,
        fullname: user.docs[0].data().fullName,
        email: user.docs[0].data().email,
        createdAt: user.docs[0].data().createdAt,
      } as unknown as UserModel;
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
