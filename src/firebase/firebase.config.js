import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBZ3jx_rOTPmIldMfFjaqdheReWOIq3-kI",
  authDomain: "coffeandcode-56234.firebaseapp.com",
  projectId: "coffeandcode-56234",
  storageBucket: "coffeandcode-56234.appspot.com",
  messagingSenderId: "480734137485",
  appId: "1:480734137485:web:794ea84e2c217a58e8e6c4"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)