
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBL0Di5sehuatgkUx0qAeS76BYH8bHu-GE",
    authDomain: "crwn-clothin-db.firebaseapp.com",
    projectId: "crwn-clothin-db",
    storageBucket: "crwn-clothin-db.appspot.com",
    messagingSenderId: "468932281721",
    appId: "1:468932281721:web:0e13080439e20f1a141ba8"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);