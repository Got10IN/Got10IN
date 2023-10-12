import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCQpgyXOYOlDx4NFBdI7PweoNeGFqUuOB4',
    authDomain: 'got10in.firebaseapp.com',
    projectId: 'got10in',
    storageBucket: 'got10in.appspot.com',
    messagingSenderId: '290225317901',
    appId: '1:290225317901:web:4d2b7ad0a77b29d92a4d44',
    measurementId: 'G-8GWZJJD1T6',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

const createUserDocumentFromGoogleAuth = async (userAuth: any) => {
    const userDocRef = doc(db, 'users', userAuth.email)
}

const analytics = getAnalytics(firebaseApp)
