import { initializeApp } from '@firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'

// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/firestore'
// import 'firebase/auth'

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

// create user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  // const userRef = doc(firestore, `users/${userAuth.uid}`)
  // const snapShot = await userRef.get()

  const userRef = doc(firestore, `users/${userAuth.uid}`)
  const snapShot = await getDoc(userRef)

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const auth = getAuth()
export const firestore = getFirestore()

// Google authentication
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error))

// export default firebase
