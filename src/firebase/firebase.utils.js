import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgjWVIPm4jcjRBXS5uJWDZvi3INFKZz5s',
  authDomain: 'react-ecom-store-db080.firebaseapp.com',
  projectId: 'react-ecom-store-db080',
  storageBucket: 'react-ecom-store-db080.appspot.com',
  messagingSenderId: '944861115615',
  appId: '1:944861115615:web:d35c2ac4b772765005256a',
  measurementId: 'G-Y3WHBN51PM',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
export const firestore = getFirestore()

// Google authentication
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase
