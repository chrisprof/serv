import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9AOOSw7yHO12zvh0KDgF8IwyoDqvbl-w",
    authDomain: "serv-3529c.firebaseapp.com",
    projectId: "serv-3529c",
    storageBucket: "serv-3529c.appspot.com",
    messagingSenderId: "192760254669",
    appId: "1:192760254669:web:dfa53f7f442730e03ed984"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

export const login = () =>
{
  var provider_g = new GoogleAuthProvider();
  signInWithPopup(auth, provider_g)
  
  .then((re)=>{
    const name = re.user.displayName;
    console.log(re);
  })
  .catch((err)=>{
    console.log(err);
  })
}
