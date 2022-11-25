import { initializeApp } from "firebase/app"
import {
  getFirestore,
  getDocs,
  collection,
  query,
} from 'firebase/firestore/lite';

import { VITE_APP } from '../constants';
import { mapError } from './'

const store = initializeApp({
  apiKey: VITE_APP.FIREBASE.KEY,
  databaseURL: VITE_APP.FIREBASE.DATABASEURL,
  authDomain: VITE_APP.FIREBASE.AUTHDOMAIN,
  projectId: VITE_APP.FIREBASE.PROJECTID,
  storageBucket: VITE_APP.FIREBASE.STORAGEBUCKET,
  messagingSenderId: VITE_APP.FIREBASE.MESSAGINGSENDERID,
  appId: VITE_APP.FIREBASE.APPID
});

const db = getFirestore(store);

class DataService {
  private error = ''
  private PATH = 'menu'

  getError() {
    return this.error
  }

  setError(message: string) {
    this.error = mapError(message) as string
  }

  async getAll() {
    try {
      const menu = query(collection(db, this.PATH));

      return getDocs(menu);
    } catch (err) {
      this.setError(err as string)
    }
  }
}

export default new DataService()