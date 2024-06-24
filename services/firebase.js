import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyA0b8306aAvl5K7oMDJ7OcdUcOSNp1JnPk",
  authDomain: "proyectoux-557bc.firebaseapp.com",
  projectId: "proyectoux-557bc",
  storageBucket: "proyectoux-557bc.appspot.com",
  messagingSenderId: "1064509419113",
  appId: "1:1064509419113:web:dff5bfe196d67e9cb43cf8"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
